# Portfolio Project

This repository contains a personal portfolio built with Next.js, TypeScript, Tailwind CSS, and pnpm. The project is automatically built and deployed to GitHub Pages using GitHub Actions.

## Overview

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS with custom configuration
- **Type Checking:** TypeScript
- **Package Manager:** pnpm
- **CI/CD:** GitHub Actions
- **Hosting:** GitHub Pages

## Tech Stack

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [pnpm](https://pnpm.io/)
- [GitHub Actions](https://github.com/features/actions)

## Local Development

1. **Install dependencies:**
   ```sh
   pnpm install
   ```
2. **Start the development server:**
   ```sh
   pnpm dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) to view the app.

## Build Process

To create a production build locally:

```sh
pnpm run build
```

- The build output is generated in the `.next` directory.
- Static export (if configured) will output to the `out` directory.

## Deployment

Deployment is automated using GitHub Actions. On every push to the `main` branch, the following steps are performed:

1. **Checkout the repository**
2. **Set up pnpm and Node.js v20**
3. **Install dependencies with pnpm**
4. **Build the Next.js app**
5. **Upload the static output as an artifact**
6. **Deploy to GitHub Pages**

The workflow file is located at `.github/workflows/nextjs.yml` and uses the following key steps:

```yaml
- uses: pnpm/action-setup@v2
- uses: actions/setup-node@v4
- run: pnpm install
- run: pnpm run build
- uses: actions/upload-pages-artifact@v3
- uses: actions/deploy-pages@v4
```

## Customization

- **Tailwind CSS:** Customize styles in `tailwind.config.ts`.
- **Next.js Config:** Adjust build and image settings in `next.config.mjs`.
- **TypeScript:** Update `tsconfig.json` for custom type checking.

---

For any issues or questions, please open an issue in this repository.
