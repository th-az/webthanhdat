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

## Cloudflare migration

The Cloudflare Worker build is configured in `wrangler.jsonc`; the normal
development and Netlify build paths remain unchanged. Cloudflare D1 is a fresh
database; no data has been copied from Netlify. Run `npm run build:cloudflare`
to build the Worker. The GitHub deployment workflow applies D1 migrations
before deploying.

Before deploying:

1. Add `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, and `BETTER_AUTH_SECRET` as
   Worker secrets using Wrangler or the Cloudflare dashboard. Keep the existing
   Google OAuth callback URL:
   `https://thanhdat2806.id.vn/api/auth/callback/google`.
2. Add `CLOUDFLARE_API_TOKEN` (Workers and D1 edit permissions) and
   `CLOUDFLARE_ACCOUNT_ID` as GitHub Actions repository secrets.
3. Deploy to the Worker preview URL and verify D1-backed pages, Google sign-in,
   and `/admin` before changing the domain's DNS. Import and review the existing
   DNS records in Cloudflare first; leave Netlify available as rollback until
   the custom-domain deployment is verified.
4. After the Worker and its secrets are verified, set the
   `CLOUDFLARE_DEPLOY_ENABLED` repository variable to `true` to enable automatic
   deployment on pushes to `main`.

The empty `webthanhdat` D1 database has been created in Cloudflare, its
migrations have been applied, and it is bound in `wrangler.jsonc`. A
`BETTER_AUTH_SECRET` has been generated directly in Cloudflare. Production
deployment remains gated until Google OAuth credentials and GitHub Actions
deployment secrets are configured and the Worker is verified. No DNS or
nameserver changes have been made; the existing Netlify site remains the live
host and rollback.
