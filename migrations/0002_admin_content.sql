create table if not exists admin_projects (
  id text primary key,
  owner_user_id text not null references "user" ("id") on delete cascade,
  project_data jsonb not null,
  is_published boolean not null default true,
  updated_at timestamptz not null default now()
);

create index if not exists admin_projects_owner_idx on admin_projects (owner_user_id);
create index if not exists admin_projects_published_idx on admin_projects (is_published);

create table if not exists contact_messages (
  id text primary key,
  recipient_email text not null,
  name text not null,
  email text not null,
  message text not null,
  is_read boolean not null default false,
  is_archived boolean not null default false,
  created_at timestamptz not null default now()
);

create index if not exists contact_messages_recipient_idx
  on contact_messages (recipient_email, created_at desc);
