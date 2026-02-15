import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const MAX_MESSAGES = 50;
const MAX_CONTENT_LENGTH = 4000;
const VALID_ROLES = ["user", "assistant"];

function validateMessages(messages: unknown): string | null {
  if (!Array.isArray(messages)) {
    return "Messages must be an array";
  }
  if (messages.length === 0 || messages.length > MAX_MESSAGES) {
    return `Messages array must contain 1-${MAX_MESSAGES} messages`;
  }
  for (const msg of messages) {
    if (!msg || typeof msg !== "object") {
      return "Each message must be an object";
    }
    if (!VALID_ROLES.includes(msg.role)) {
      return "Invalid message role";
    }
    if (typeof msg.content !== "string" || msg.content.length === 0 || msg.content.length > MAX_CONTENT_LENGTH) {
      return `Message content must be a string between 1 and ${MAX_CONTENT_LENGTH} characters`;
    }
  }
  return null;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return new Response(
        JSON.stringify({ error: "Invalid request body" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { messages } = body as { messages: unknown };

    // Validate input
    const validationError = validateMessages(messages);
    if (validationError) {
      return new Response(
        JSON.stringify({ error: validationError }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY is not configured");
      return new Response(
        JSON.stringify({ error: "Service temporarily unavailable. Please try again later.", code: "CONFIG_ERROR" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Processing chat request with", (messages as unknown[]).length, "messages");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          {
            role: "system",
            content: `You are a helpful assistant for Bespoke Auto Design, a premium automotive protection specialist in Miami, Florida. 

Our services include:
- Paint Protection Film (PPF): Ultimate protection for vehicle paint with self-healing properties
- Ceramic Coating: Long-lasting shine and protection with hydrophobic properties
- Ceramic Window Tint: Heat rejection, UV protection, and enhanced privacy
- Vinyl Wraps: Custom color changes and paint protection
- Marine Services: PPF, ceramic coating, and tinting for boats

Key points to emphasize:
- We use only premium products like XPEL
- All services come with lifetime warranties
- We serve Miami, Florida and surrounding areas
- Professional installation by certified technicians
- Free quotes available

Be conversational, helpful, and encourage users to request a quote if they're interested. Keep responses concise and focused on our services.`,
          },
          ...(messages as Array<{ role: string; content: string }>),
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Too many requests. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable. Please try again later." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      throw new Error("AI gateway error");
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error instanceof Error ? error.message : String(error));
    return new Response(
      JSON.stringify({ 
        error: "Unable to process chat request. Please try again later.",
        code: "CHAT_ERROR"
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
