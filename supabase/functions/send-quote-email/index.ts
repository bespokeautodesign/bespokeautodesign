import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface QuoteRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  vehicle: string;
  service: string;
  contactMethods: string[];
  message: string;
}

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function validateQuoteData(data: unknown): string | null {
  if (!data || typeof data !== "object") return "Invalid request data";
  const d = data as Record<string, unknown>;
  if (!d.firstName || typeof d.firstName !== "string" || d.firstName.length > 100) return "Invalid first name";
  if (d.lastName !== undefined && d.lastName !== "" && (typeof d.lastName !== "string" || (d.lastName as string).length > 100)) return "Invalid last name";
  if (!d.email || typeof d.email !== "string" || d.email.length > 255 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) return "Invalid email address";
  if (!d.phone || typeof d.phone !== "string" || d.phone.length > 30) return "Invalid phone number";
  if (!d.vehicle || typeof d.vehicle !== "string" || d.vehicle.length > 200) return "Invalid vehicle information";
  if (!d.service || typeof d.service !== "string" || d.service.length > 200) return "Invalid service selection";
  if (!Array.isArray(d.contactMethods) || d.contactMethods.length > 10 || !d.contactMethods.every((m: unknown) => typeof m === "string" && (m as string).length < 50)) return "Invalid contact methods";
  if (!d.message || typeof d.message !== "string" || d.message.length > 5000) return "Message is required and must be under 5000 characters";
  return null;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    let rawBody: unknown;
    try {
      rawBody = await req.json();
    } catch {
      return new Response(
        JSON.stringify({ error: "Invalid request body" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const validationError = validateQuoteData(rawBody);
    if (validationError) {
      return new Response(
        JSON.stringify({ error: validationError }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const quoteData = rawBody as QuoteRequest;
    
    console.log("Received quote request:", { service: quoteData.service });
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Quote Request</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
          <p><strong>Name:</strong> ${escapeHtml(quoteData.firstName)} ${escapeHtml(quoteData.lastName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(quoteData.email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(quoteData.phone)}</p>
          <p><strong>Vehicle:</strong> ${escapeHtml(quoteData.vehicle)}</p>
          <p><strong>Service:</strong> ${escapeHtml(quoteData.service)}</p>
          <p><strong>Preferred Contact:</strong> ${quoteData.contactMethods.map(escapeHtml).join(', ')}</p>
          <p><strong>Message:</strong><br/>${escapeHtml(quoteData.message).replace(/\n/g, '<br/>')}</p>
        </div>
      </div>
    `;

    const emailResponse = await resend.emails.send({
      from: "Bespoke Auto Design <onboarding@resend.dev>",
      to: ["sales@bespokeauto.design"],
      subject: `Quote Request - ${quoteData.service}`,
      html: emailHtml,
      reply_to: quoteData.email,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ success: true, message: "Quote request sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: unknown) {
    console.error("Error sending quote email:", error);
    return new Response(
      JSON.stringify({ error: "Unable to send quote request. Please try again or contact us at (786) 395-9172." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
