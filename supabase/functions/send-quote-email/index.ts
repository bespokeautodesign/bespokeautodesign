import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@3.1.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function str(val: unknown, maxLen = 500): string {
  if (typeof val === "string") return val.slice(0, maxLen).trim();
  return "";
}

function normalizePayload(d: Record<string, unknown>) {
  // Name: support firstName+lastName OR single name field
  const firstName = str(d.firstName, 100);
  const lastName = str(d.lastName, 100);
  const name = firstName
    ? `${firstName}${lastName ? " " + lastName : ""}`
    : str(d.name, 200) || "Not provided";

  // Phone
  const phone = str(d.phone, 30);
  if (!phone) return { error: "Phone number is required" };

  // Vehicle
  const vehicle = str(d.vehicle, 200);
  if (!vehicle) return { error: "Vehicle information is required" };

  // Service: accept string or fall back
  const service = str(d.service, 200) || "General Inquiry";

  // Contact methods: accept array or single string or missing
  let contactMethods: string[] = [];
  if (Array.isArray(d.contactMethods)) {
    contactMethods = d.contactMethods.filter((m): m is string => typeof m === "string").map(m => m.slice(0, 50));
  } else if (typeof d.contactMethod === "string") {
    contactMethods = [d.contactMethod.slice(0, 50)];
  }

  // Email: optional
  const email = str(d.email, 255);

  // Message: optional
  const message = str(d.message, 5000);

  return { name, phone, vehicle, service, contactMethods, email, message, error: null };
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

    if (!rawBody || typeof rawBody !== "object") {
      return new Response(
        JSON.stringify({ error: "Invalid request data" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const parsed = normalizePayload(rawBody as Record<string, unknown>);
    if (parsed.error) {
      return new Response(
        JSON.stringify({ error: parsed.error }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const { name, phone, vehicle, service, contactMethods, email, message } = parsed;

    console.log("Received quote request:", { service, name });

    const messageLine = message
      ? `<p><strong>Message:</strong><br/>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>`
      : "";
    const contactLine = contactMethods.length > 0
      ? `<p><strong>Preferred Contact:</strong> ${contactMethods.map(escapeHtml).join(', ')}</p>`
      : "";

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Quote Request</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
          <p><strong>Name:</strong> ${escapeHtml(name!)}</p>
          <p><strong>Email:</strong> ${email ? escapeHtml(email) : "Not provided"}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone!)}</p>
          <p><strong>Vehicle:</strong> ${escapeHtml(vehicle!)}</p>
          <p><strong>Service:</strong> ${escapeHtml(service!)}</p>
          ${contactLine}
          ${messageLine}
        </div>
      </div>
    `;

    const replyTo = email && email !== "" && email !== "noemail@placeholder.com"
      ? email
      : "sales@bespokeauto.design";

    const emailResponse = await resend.emails.send({
      from: "Bespoke Auto Design <quotes@bespokeauto.design>",
      to: ["sales@bespokeauto.design"],
      subject: `Quote Request - ${service}`,
      html: emailHtml,
      reply_to: replyTo,
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
