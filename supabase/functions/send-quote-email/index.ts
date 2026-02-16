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

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const quoteData: QuoteRequest = await req.json();
    
    console.log("Received quote request:", { email: quoteData.email, service: quoteData.service });

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
  } catch (error: any) {
    console.error("Error sending quote email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
