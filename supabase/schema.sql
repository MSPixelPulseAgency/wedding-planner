create table if not exists public.feedback (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 1 and 160),
  email text not null check (char_length(email) between 3 and 240),
  event_type text,
  rating smallint check (rating between 1 and 5),
  feedback text not null check (char_length(feedback) between 20 and 4000),
  public_permission boolean not null default false,
  status text not null default 'private_review' check (status in ('private_review', 'approved', 'declined'))
);

alter table public.feedback enable row level security;

-- No anonymous policies are intentional. The Vercel function writes through the
-- server-only service role key; browsers never receive database credentials.
