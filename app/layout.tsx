import type { Metadata } from 'next'
import {
  Cormorant_Garamond,
  Italiana,
  Cinzel,
  Jost,
  DM_Mono,
} from 'next/font/google'

import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const jost = Jost({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500'],
  variable: '--font-jost',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

const italiana = Italiana({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-italiana',
})

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-cinzel',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-dm-mono',
})

export const metadata: Metadata = {
  title: 'Dra. Ariane Pagnoncelli | Endocrinologista',
  description:
    'Endocrinologista especializada em saúde metabólica, tireoide, diabetes e equilíbrio hormonal.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`
        ${jost.variable}
        ${cormorant.variable}
        ${italiana.variable}
        ${cinzel.variable}
        ${dmMono.variable}
        bg-[#F4F1EC]
      `}
    >
      <body className="font-sans antialiased font-light">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}