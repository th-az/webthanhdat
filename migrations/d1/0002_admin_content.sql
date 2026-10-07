CREATE TABLE IF NOT EXISTS admin_projects (
  id TEXT PRIMARY KEY NOT NULL,
  owner_user_id TEXT NOT NULL REFERENCES "user" ("id") ON DELETE CASCADE,
  project_data TEXT NOT NULL CHECK (json_valid(project_data)),
  is_published INTEGER NOT NULL DEFAULT 1,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS admin_projects_owner_idx ON admin_projects (owner_user_id);
CREATE INDEX IF NOT EXISTS admin_projects_published_idx ON admin_projects (is_published);

CREATE TABLE IF NOT EXISTS contact_messages (
  id TEXT PRIMARY KEY NOT NULL,
  recipient_email TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  is_read INTEGER NOT NULL DEFAULT 0,
  is_archived INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS contact_messages_recipient_idx
  ON contact_messages (recipient_email, created_at DESC);
