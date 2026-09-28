# Deploying LectorsBuClub to Cloudflare Workers

This guide walks you through deploying the LectorsBuClub website to
Cloudflare Workers using the official `@opennextjs/cloudflare` adapter.

Everything in this project is already wired up. You only need to run two
commands from your own machine.

---

## What's already set up

| File | Purpose |
|------|---------|
| `open-next.config.ts` | Tells OpenNext how to bundle your Next.js app for the Cloudflare Workers runtime |
| `wrangler.jsonc` | Cloudflare Worker config — name `lectorsbuclub`, Workers runtime, static assets binding |
| `package.json` scripts | `cf:build` (local build test), `preview` (local Workers preview), `deploy` (production deploy) |
| `.gitignore` | Excludes `.open-next/`, `.wrangler/`, `.mf/` build artifacts |
| `next.config.ts` | `output: "standalone"` (required by OpenNext) |

The Cloudflare adapter (`@opennextjs/cloudflare`) and CLI (`wrangler`) are
installed as devDependencies. Verified bundle size: **2.70 MB compressed**
(under Cloudflare's 3 MB free-tier Workers limit).

---

## Prerequisites

- A **Cloudflare account** (free tier is fine — 100,000 Workers requests/day)
- **Node.js 18+** and either npm/pnpm/bun installed on your machine
- A clone of this project on your local machine

---

## Deploy in 2 commands

### Step 1 — Authenticate with Cloudflare

From the project root:

```bash
npx wrangler login
```

This opens your browser and asks you to authorize the Wrangler CLI to deploy
to your Cloudflare account. Click "Allow". You only need to do this once
per machine.

### Step 2 — Build and deploy

```bash
npm run deploy
```

(Or `bun run deploy` / `pnpm deploy` if that's what you use.)

This runs the OpenNext build (`opennextjs-cloudflare build`) followed by
`wrangler deploy`. The first deploy takes about 30–60 seconds.

When it finishes, wrangler prints a URL that looks like:

```
https://lectorsbuclub.<your-account-subdomain>.workers.dev
```

That URL is your live site. Open it in a browser to verify.

---

## Optional — Use a custom domain

After your first deploy, you can attach your own domain (e.g.
`lectorsbuclub.com`) to the Worker:

1. Open the Cloudflare dashboard → **Workers & Pages**
2. Click on `lectorsbuclub`
3. Go to the **Custom domains** tab
4. Click **Set up a custom domain** → enter your domain
5. Cloudflare will create the DNS records for you (if the domain is on
   Cloudflare) or show you which DNS records to add (if it's on another
   registrar)

Once verified, your site is live at your custom domain with free SSL.

---

## Useful commands

| Command | What it does |
|---------|--------------|
| `npm run cf:build` | Test the Cloudflare build locally without deploying. Verifies the Worker bundle compiles. |
| `npm run preview` | Build + run the Worker locally on `http://localhost:8787` (no deploy). Good for testing the production build. |
| `npm run deploy` | Build + deploy to Cloudflare Workers (production). |
| `npx wrangler tail` | Live tail your Worker's production logs. Useful for debugging the contact form. |

---

## Notes about the contact form

The contact form at `#contact` posts to `/api/contact`, which is wired up
as a Next.js API route and bundled into the Worker by OpenNext. It works
out of the box on Cloudflare — no extra setup needed.

Currently the endpoint logs submissions to the Worker's console. To see
them live:

```bash
npx wrangler tail
```

Then submit the form on your live site — the submission JSON appears in
your terminal.

When you're ready to actually receive emails from the form, swap the
`console.log` in `src/app/api/contact/route.ts` for a call to an email
service like Resend, Mailgun, or Cloudflare Email Workers. The route
already has the validated form data ready to forward.

---

## Troubleshooting

**`Error: wrangler: command not found`**
Run `bun install` (or `npm install`) once to install devDependencies, then
retry. The `wrangler` binary is installed locally in `node_modules/.bin/`.

**Deploy fails with `Authentication error`**
Run `npx wrangler login` again — your session may have expired.

**`Worker exceeded resource limits`**
This shouldn't happen (current bundle is 2.70 MB, limit is 3 MB) but if
it does, try `bun run cf:build` locally and check the bundle size.

**Page loads but images don't show**
Open Cloudflare dashboard → Workers & Pages → `lectorsbuclub` → Settings
→ check that the **Static assets** binding points to `.open-next/assets`
(it should — already configured in `wrangler.jsonc`).

**Contact form returns 405**
Make sure the deploy completed (`wrangler deploy` shows "Deployed
lectorsbuclub..."). The first deploy sometimes takes a few seconds to
propagate the API route.
