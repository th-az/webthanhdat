# Netlify deployment setup

The portfolio site is `portforlio-thanhdat`; its custom domain is
`https://thanhdat2806.id.vn`. The former `heritage-coffee` site remains
available at `https://heritage-coffee.netlify.app`.

## Local development

Run the admin locally at `localhost` or `127.0.0.1` with `npm run dev`; local
development bypasses Google sign-in and uses the in-memory PGLite database,
which resets when the dev server restarts. That bypass is unavailable in
production builds and is disabled when a real Postgres database is configured.
Production `/admin` continues to require the verified Google OAuth session.

## Google sign-in

1. In [Google Search Console](https://search.google.com/search-console/welcome),
   verify ownership of `thanhdat2806.id.vn`. Google may ask you to add a DNS TXT
   record at the domain registrar.
2. In [Google Cloud Console](https://console.cloud.google.com/), configure the
   OAuth consent screen as External and add `dat206kd@gmail.com` as a test user.
   Add `thanhdat2806.id.vn` as an authorized domain after Search Console
   verification.
3. Create an OAuth client ID with application type **Web application**:
   - Authorized JavaScript origin:
     `https://thanhdat2806.id.vn`
   - Authorized redirect URI:
     `https://thanhdat2806.id.vn/api/auth/callback/google`
4. In the
   [Netlify environment settings](https://app.netlify.com/projects/portforlio-thanhdat/configuration/env),
   add:

   | Variable                  | Value / scope                                                       |
   | ------------------------- | ------------------------------------------------------------------- |
   | `GOOGLE_CLIENT_ID`        | Client ID from Google; Functions                                    |
   | `GOOGLE_CLIENT_SECRET`    | Client secret from Google; secret, Functions only                   |
   | `VITE_AUTH_ENABLED`       | `true`; Builds and Functions                                        |
   | `VITE_DIRECT_GOOGLE_AUTH` | `true`; Builds and Functions                                        |
   | `BETTER_AUTH_URL`         | `https://thanhdat2806.id.vn`; Functions                             |
   | `BETTER_AUTH_SECRET`      | A unique random secret of at least 32 bytes; secret, Functions only |

   Do not put OAuth secrets in source control or send them in chat.

## Database and deployment

Netlify Database is provisioned for the portfolio site. Its
`NETLIFY_DB_URL` is managed by Netlify; do not copy it into source files.
Production migrations are in `netlify/database/migrations/` and are applied by
Netlify during deployment. Database compute and bandwidth use team credits.

After configuring the Google variables, trigger a production deploy and verify
that sign-in works with `dat206kd@gmail.com` before managing content in `/admin`.
