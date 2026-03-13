# PronghornAI Next.js Template

A starter Next.js application with Postgres, authentication, analytics, and email configuration baked in.

## Getting Started

1. Install dependencies:

```bash
pnpm install
```

2. Configure your environment variables (see below).

3. Start the local database:

```bash
pnpm docker:up
```

4. Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Environment Setup

Copy the example file and add your secrets:

```bash
cp .env.example .env.local
```

Edit `.env.local` with values for secrets such as `BETTER_AUTH_SECRET`, Google OAuth credentials, and SMTP passwords. The other environment files are committed to document defaults:

- `.env.example` documents every supported variable.
- `.env.development` provides safe defaults for local development.
- `.env.production` contains non-secret placeholders for production deployments.
- `.env.test` configures the test database and deterministic auth secrets.
- `.env.local` is for personal overrides and is git-ignored.

Run `pnpm docker:up` to start the Postgres database used by the local defaults.
