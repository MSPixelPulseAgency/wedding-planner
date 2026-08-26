# Production form integrations

LUMA includes two server-side Vercel endpoints:

- `POST /api/inquiry` validates an event inquiry and sends it through Resend.
- `POST /api/feedback` stores private feedback in Supabase, then sends a private Resend notification.

Both endpoints fail closed with a clear `503` response while providers are unconfigured. The website must not display a success state unless an endpoint confirms acceptance.

## Required Vercel variables

Copy the server-only names from `.env.example` into the Vercel project. Never add a `VITE_` prefix to credentials.

- `RESEND_API_KEY`
- `INQUIRY_FROM_EMAIL` using a domain verified in Resend
- `INQUIRY_TO_EMAIL` (defaults to `mspixelpulse@gmail.com`)
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

Run `supabase/schema.sql` once in the authorized Supabase project before enabling feedback. The table has row-level security and intentionally exposes no anonymous insert or read policy; only the server-side service role can write.

After configuration, submit one controlled test inquiry and one private feedback entry, confirm the email destination, confirm the private database row, and then delete the test row through the Supabase dashboard.
