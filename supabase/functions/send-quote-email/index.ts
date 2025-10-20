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

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const quoteData: QuoteRequest = await req.json();
    
    console.log("Received quote request:", { email: quoteData.email, service: quoteData.service });

    // Basic server-side validation for a valid submitter email
    const submitterEmail = String(quoteData.email || '').trim().toLowerCase();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(submitterEmail);
    if (!isValidEmail) {
      return new Response(
        JSON.stringify({ error: "A valid email is required to submit a quote." }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Quote Request</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
          <p><strong>Name:</strong> ${quoteData.firstName} ${quoteData.lastName}</p>
          <p><strong>Email:</strong> ${quoteData.email}</p>
          <p><strong>Phone:</strong> ${quoteData.phone}</p>
          <p><strong>Vehicle:</strong> ${quoteData.vehicle}</p>
          <p><strong>Service:</strong> ${quoteData.service}</p>
          <p><strong>Preferred Contact:</strong> ${quoteData.contactMethods.join(', ')}</p>
          <p><strong>Message:</strong><br/>${quoteData.message}</p>
        </div>
      </div>
    `;

    const toRecipients = ["sales@bespokeauto.design"];
    const ccRecipients = submitterEmail !== "sales@bespokeauto.design" ? [submitterEmail] : [];

    const fromEmail = "Bespoke Auto Design <quotes@bespokeauto.design>";
    console.log("Sending email via Resend", { from: fromEmail, to: toRecipients, cc: ccRecipients });

    const emailResponse = await resend.emails.send({
      from: fromEmail,
      to: toRecipients,
      cc: ccRecipients,
      subject: `Quote Request - ${quoteData.service}`,
      html: emailHtml,
      reply_to: submitterEmail,
    });

    if ((emailResponse as any)?.error) {
      console.error("Resend error:", (emailResponse as any).error);
      return new Response(
        JSON.stringify({ error: "Failed to send email" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Email sent successfully:", emailResponse);

    // Return immediate success response
    return new Response(
      JSON.stringify({ success: true, message: "Quote request sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error processing quote:", error);
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
