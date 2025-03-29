import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Next.js MDX Blog',
  description: 'Articles and thoughts from the blog',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
