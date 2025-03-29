import type { Metadata } from 'next'
import { JsonLd } from '@/components/jsonLd'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about the author and their work',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Your Name',
    url: 'https://nextjs-mdx-blog-template.vercel.app',
    jobTitle: 'Frontend Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Example Company',
    },
    description:
      'Frontend developer specializing in React, Next.js and modern web technologies',
    skills: 'React, Next.js, TypeScript, Tailwind CSS, Node.js',
  }

  return (
    <>
      <JsonLd data={personJsonLd} />
      {children}
    </>
  )
}
