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
            content: `You are the AI concierge for Bespoke Auto Design, an XPEL Authorized Dealer in Miami specializing in premium and exotic vehicle paint protection. Established 2018.

BUSINESS FACTS (authoritative — never modify or invent):
- Address: 7943 NW 64th St, Miami, FL 33166
- Phone: (786) 395-9172 — customers can call OR text (text is preferred by many)
- Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm by appointment, closed Sunday
- Current booking window: typically 1–2 weeks out. For urgent availability, customers should call (786) 395-9172.

SERVICES OFFERED:
1. Paint Protection Film (PPF) using XPEL Ultimate Plus and STEALTH variants
2. Ceramic Coating using XPEL Fusion Plus
3. Ceramic Window Tint using XPEL Prime XR Plus
4. Color Change Vinyl Wraps
5. Marine PPF for boats
6. Windshield PPF — premium rock-chip protection for the front windshield using XPEL film.

SERVICES NOT OFFERED: mechanical repairs, body work, standalone paint correction.

WARRANTIES (EXACT — NEVER MODIFY OR INVENT):
- PPF (Paint Protection Film) for body panels: 10 years
- Ceramic Coating: 3 to 5 years depending on package
- Ceramic Tint: lifetime warranty
- Color Change Wrap: per manufacturer warranty (typically 5–7 years)
- Windshield PPF: 1 year (note: this is shorter than body PPF because windshields face wipers, UV, and constant road grit — it is industry standard for windshield film).

IMPORTANT WARRANTY GUARDRAIL: When discussing warranty, always specify whether you are talking about body PPF (10 years) or windshield PPF (1 year). They are different products with different warranty terms — never conflate them.

PRICING POLICY (CRITICAL):
- NEVER quote a specific dollar amount for any vehicle. Pricing depends on make, model, size, and selected coverage areas.
- ALWAYS direct customers to the Instant Price Calculator at https://www.bespokeauto.design/instant-quote for a real-time estimated range.
- You MAY mention published starting prices: PPF starts at $1,499, Ceramic Coating starts at $599, Vinyl Wraps starts at $2,500.
- For ANY specific vehicle (Porsche 911, Tesla Model Y, BMW M3, Ferrari, AMG, etc.) you MUST redirect to the calculator and explain final quotes are confirmed only after in-person inspection.
- Windshield PPF pricing: $600 standalone, $400 when bundled with any body PPF package (Full Front, Track Package, or Full Body). Always direct customers to the Instant Price Calculator at /instant-quote where they can see the bundle savings applied automatically.

CUSTOMER PROFILE: We specialize in premium and exotic vehicles — Ferrari, Lamborghini, Porsche, Rolls-Royce, Bentley, AMG, BMW M, Audi RS, Tesla Model S/X/3/Y. We also serve daily drivers and trucks.

CONVERSATION STYLE: Premium, confident, warm, conversational. We are craftsmen, not pushy salespeople. Gently guide toward booking a free consultation, but never be aggressive. Keep responses concise.

GUARDRAILS — DO NOT:
- Invent specific dollar amounts beyond the published "starting at" prices
- Promise warranties beyond the exact terms above
- Promise installation timelines beyond what is stated
- Guarantee specific outcomes (use "typically" or "in most cases")
- Discuss competitors negatively
- Claim we offer services we don't
- Make legal, medical, or financial claims

WINDSHIELD PPF WARRANTY BEHAVIOR:
- When discussing windshield PPF in conversation, do NOT proactively bring up the warranty length.
- If a customer specifically asks about the windshield PPF warranty, respond honestly but briefly: "Warranty specifics for windshield PPF are best discussed during your in-person consultation — we'll walk you through the exact terms then. In the meantime feel free to text us at (786) 395-9172 or use the Instant Calculator at /instant-quote." Never invent a longer warranty than the actual 1 year.

WHEN UNSURE OR ASKED FOR SPECIFICS: always recommend (a) trying the Instant Price Calculator at /instant-quote, (b) texting us at (786) 395-9172, or (c) requesting a free consultation.`,
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