// Vercel Serverless Function — Meta Lead Ads Webhook
// Receives lead notifications from Meta, fetches full lead data, saves to CRM

const SUPABASE_URL = 'https://miguincxgowtkemqeciw.supabase.co/rest/v1/leads';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pZ3VpbmN4Z293dGtlbXFlY2l3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI5ODc3OTAsImV4cCI6MjA4ODU2Mzc5MH0.KVViZvjQQuxrqP4TMJNOYwb1-UBC-k7D8_uTx-wEQ8E';
const VERIFY_TOKEN = 'bespoke_meta_verify_2026';

// Meta sends field data in an array of {name, values} — extract to flat object
function extractFields(fieldData) {
  const fields = {};
  if (!Array.isArray(fieldData)) return fields;
  for (const f of fieldData) {
    fields[f.name] = Array.isArray(f.values) ? f.values[0] : f.values;
  }
  return fields;
}

export default async function handler(req, res) {
  // ─── GET: Webhook Verification ───
  if (req.method === 'GET') {
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      console.log('✅ Meta webhook verified');
      return res.status(200).send(challenge);
    }
    return res.status(403).json({ error: 'Verification failed' });
  }

  // ─── POST: Lead Notification ───
  if (req.method === 'POST') {
    const body = req.body;
    console.log('📥 Meta webhook received:', JSON.stringify(body));

    try {
      const entries = body?.entry || [];
      
      for (const entry of entries) {
        const changes = entry?.changes || [];
        
        for (const change of changes) {
          if (change.field !== 'leadgen') continue;
          
          const leadgenId = change.value?.leadgen_id;
          const pageId = change.value?.page_id;
          const formId = change.value?.form_id;
          const adId = change.value?.ad_id;
          const createdTime = change.value?.created_time;

          // Try to fetch full lead data from Meta Graph API
          let leadData = null;
          const pageToken = process.env.META_PAGE_ACCESS_TOKEN;
          
          if (pageToken && leadgenId) {
            try {
              const graphRes = await fetch(
                `https://graph.facebook.com/v19.0/${leadgenId}?access_token=${pageToken}`
              );
              leadData = await graphRes.json();
              console.log('📋 Lead data from Graph API:', JSON.stringify(leadData));
            } catch (e) {
              console.error('Failed to fetch lead from Graph API:', e.message);
            }
          }

          // Extract fields from lead data
          const fields = leadData ? extractFields(leadData.field_data) : {};
          
          // Map common Meta form fields to our CRM schema
          const name = fields.full_name || fields.name || 
                       [fields.first_name, fields.last_name].filter(Boolean).join(' ') || 
                       'Meta Lead';
          const phone = fields.phone_number || fields.phone || '';
          const email = fields.email || '';
          const vehicle = fields.vehicle || fields.car || fields.car_model || 
                         fields['what_vehicle_do_you_have?'] || fields['vehicle_make_&_model'] || '';
          const service = fields.service || fields.service_interest || fields['service_interested_in'] || '';
          const message = fields.message || fields.comments || fields.notes || '';

          // Save to Supabase
          const crmRes = await fetch(SUPABASE_URL, {
            method: 'POST',
            headers: {
              'apikey': SUPABASE_KEY,
              'Authorization': `Bearer ${SUPABASE_KEY}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name,
              phone,
              email,
              vehicle,
              service,
              source: 'Meta Ads',
              status: 'new',
              notes: message || `Lead from Meta form ${formId || 'unknown'}`,
              meta_data: {
                platform: 'meta',
                leadgen_id: leadgenId,
                page_id: pageId,
                form_id: formId,
                ad_id: adId,
                created_time: createdTime,
                raw_fields: fields,
              },
            }),
          });

          if (crmRes.ok) {
            console.log(`✅ Meta lead saved: ${name} | ${phone} | ${vehicle}`);
          } else {
            const errText = await crmRes.text();
            console.error('❌ Failed to save lead:', errText);
          }
        }
      }

      return res.status(200).json({ status: 'ok' });
    } catch (e) {
      console.error('❌ Webhook error:', e.message);
      return res.status(200).json({ status: 'error', message: e.message });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
