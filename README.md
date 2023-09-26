# NasaLite Wedding Planning

## Get Started

### [Supabase] (https://supabase.com/docs/reference/cli/supabase-init)
```bash
npm install -D supabase
npm install supabase
```
#### Commands
To install supbase cli:

```bash
npm install supabase
```

To initialize a local supabase project:
```bash
npx supabase init
```

To start your local supabase instance:
```bash
npx supabase start
```

Create `.env` file
- Store `API URL` + `anon key` (get from terminal after `supabase start`)
- Use the following variable names for Vite reasons
  - VITE_SUPABASE_ANON_KEY=<anon_key>
  - VITE_SUPABASE_API_URL=<api_url>

Create a prod instance on `app.supabase.com/`
- Give it a `Name` + `Database Password`
- Grab `Project URL` + `API Key` and add to `.env.production` (same variable names as `.env`)

Open the local dashboard
- Go to `localhost:54323` 


Go to Authentication tab
- Turn off `Confirm email` + `Secure email change` for local development
- Not seeing this option in local dashboard so applying in `supabase/config.toml`
- Leave this on in prod

To create a new migration file:
```bash
npx supabase migration new <migration name>
# npx supabase migration new original-ddl # `ddl` => Data Definition Language
```

### [Playwright](https://playwright.dev/docs/intro)

To initialize playwrigh in your repo:
```bash
npm init playwright@latest
```
- Put tests in `e2e` directory
- Add a GitHub Actions workflow? No, not now at least.
- Install Playwright browsers? true