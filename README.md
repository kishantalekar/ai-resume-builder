This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# ai-resume-builder
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

# DATABASE_URL="postgresql://neondb_owner:******@ep-purple-frog-a5e79ju1-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require"


# DATABASE_URL	postgresql://neondb_owner:******@ep-purple-frog-a5e79ju1-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require
# DATABASE_URL_UNPOOLED	postgresql://neondb_owner:******@ep-purple-frog-a5e79ju1.us-east-2.aws.neon.tech/neondb?sslmode=require

# Recommended for most uses
DATABASE_URL=postgres://neondb_owner:npg_tizf9Wg5REaF@ep-yellow-fire-a5d2j3fy-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require

# For uses requiring a connection without pgbouncer
DATABASE_URL_UNPOOLED=postgresql://neondb_owner:npg_tizf9Wg5REaF@ep-yellow-fire-a5d2j3fy.us-east-2.aws.neon.tech/neondb?sslmode=require

# Parameters for constructing your own connection string
PGHOST=ep-yellow-fire-a5d2j3fy-pooler.us-east-2.aws.neon.tech
PGHOST_UNPOOLED=ep-yellow-fire-a5d2j3fy.us-east-2.aws.neon.tech
PGUSER=neondb_owner
PGDATABASE=neondb
PGPASSWORD=npg_tizf9Wg5REaF

# Parameters for Vercel Postgres Templates
POSTGRES_URL=postgres://neondb_owner:npg_tizf9Wg5REaF@ep-yellow-fire-a5d2j3fy-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require
POSTGRES_URL_NON_POOLING=postgres://neondb_owner:npg_tizf9Wg5REaF@ep-yellow-fire-a5d2j3fy.us-east-2.aws.neon.tech/neondb?sslmode=require
POSTGRES_USER=neondb_owner
POSTGRES_HOST=ep-yellow-fire-a5d2j3fy-pooler.us-east-2.aws.neon.tech
POSTGRES_PASSWORD=npg_tizf9Wg5REaF
POSTGRES_DATABASE=neondb
POSTGRES_URL_NO_SSL=postgres://neondb_owner:npg_tizf9Wg5REaF@ep-yellow-fire-a5d2j3fy-pooler.us-east-2.aws.neon.tech/neondb
POSTGRES_PRISMA_URL=postgres://neondb_owner:npg_tizf9Wg5REaF@ep-yellow-fire-a5d2j3fy-pooler.us-east-2.aws.neon.tech/neondb?pgbouncer=true&connect_timeout=15&sslmode=require


# clerk

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_c2VsZWN0ZWQtcmVpbmRlZXItOS5jbGVyay5hY2NvdW50cy5kZXYk
CLERK_SECRET_KEY=sk_test_0VS4iP43tUjFayA4D8dzCzUzekd4SgzquyfgybgaPO

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up