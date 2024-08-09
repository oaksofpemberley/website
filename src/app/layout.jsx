import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Ron  Synakowski',
    default:
      'Ron  Synakowski - Technologist, Retired Military Acquisition, Staff, and Data Officer.',
  },
  description:
    'I’m Ron , a connector of people and entrepreneur based out of Oklahoma City. I’m the founder and CEO of Track-Record.co, where we work with technologies that empower commercial, Department of Defense, and Federal organizations explore the art of the possible.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
