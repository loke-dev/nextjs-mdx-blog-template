# Next.js MDX Blog Template

A minimalist blog template built with Next.js, MDX, and Tailwind CSS. Write posts in MDX, get server components, view transitions, and dark mode out of the box.

<img width="1251" alt="Next.js MDX Blog Template" src="https://github.com/user-attachments/assets/8a263c60-778a-404d-bca5-b9e44cdfedc6" />

## Features

- **Next.js 15** — App Router with React 19 Server Components
- **MDX Blog** — Write posts in Markdown with JSX components
- **Tailwind CSS 4** — Utility-first styling with dark mode
- **View Transitions** — Smooth page transitions via the View Transitions API
- **Animations** — Motion library integration
- **SEO Optimised** — Meta tags, Open Graph, structured data
- **Accessible** — Built on Radix UI primitives (shadcn/ui)
- **Code Highlighting** — Shiki for syntax highlighting
- **Developer Ready** — TypeScript, ESLint, Prettier, Husky

## Stack

- [Next.js 15](https://nextjs.org)
- [React 19](https://react.dev)
- [TypeScript](https://typescriptlang.org)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Radix UI](https://radix-ui.com) / [shadcn/ui](https://ui.shadcn.com)
- [MDX](https://mdxjs.com)
- [Shiki](https://shiki.style)
- [Geist Font](https://vercel.com/font)

## Get Started

```bash
git clone https://github.com/loke-dev/nextjs-mdx-blog-template my-website
cd my-website
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Requires Node.js v20+ and pnpm v8+.

## Project Structure

```
src/
├── app/          # App router pages
├── components/   # React components
│   ├── mdx/      # MDX-specific components
│   └── ui/       # UI components (shadcn)
├── lib/          # Utility functions
├── posts/        # MDX blog posts
├── styles/       # Global styles
└── types/        # TypeScript types
```

## Writing Posts

Add MDX files to `src/posts/`:

```mdx
---
title: My New Post
date: 2024-03-25
description: A description of my new post
---

# My New Post

This is the content of my post written in MDX.
```

## Customise

1. Update site metadata in `src/app/layout.tsx`
2. Modify the theme in `src/styles/globals.css`
3. Add or modify components in `src/components/`
4. Update pages in `src/app/`

## Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/loke-dev/nextjs-mdx-blog-template)

Works on any platform that supports Next.js.

## License

MIT
