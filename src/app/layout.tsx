import { Analytics } from '@vercel/analytics/react';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jacob Chademwiri | Frontend Developer in Centurion, SA',
  description: "I'm a Frontend Developer in Centurion, SA. I love to build websites  with JavaScript, Next.js, React, Express, Tailwind and MongoDB.",
  alternates: {
    canonical: 'https://www.jacobc.co.za',
  },
  openGraph: {
    title: 'Jacob Chademwiri | Frontend Developer in Centurion, SA',
    siteName: 'Playhouse Media Group',
    description:
      "I'm a Frontend Developer in Centurion, SA. I love to build websites  with JavaScript, Next.js, React, Express, Tailwind and MongoDB.",
    url: 'https://www.jacobc.co.za',
    locale: 'en_US',
    type: 'website',
  },
  category: 'technology',
  twitter: {
    creator: '@jchademwiri',
    creatorId: '1467726470533754880',
    siteId: '1467726470533754880',
    card: 'summary_large_image',

  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={`${inter.className}min-h-screen bg-dark sm:p-6 lg:p-12`} >
        <main className='mx-auto rounded max-w-7xl bg-armyGreen/30' >

          {children}
        </main>
        <footer className='py-4 mt-5 text-center text-white'>
          Jacob Chademwiri - &copy; {new Date().getFullYear()} All Rights Reserved
        </footer>
        <Analytics />
      </body>
    </html>
  )
}
