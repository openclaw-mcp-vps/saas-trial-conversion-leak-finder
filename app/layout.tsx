import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Trial Conversion Leak Finder — Find Where Trial Users Drop Off',
  description: 'Track trial user behavior and identify exact steps where users abandon before converting to paid. Built for SaaS founders and growth teams.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4671dad6-742a-4e6a-9d97-bf3ce0463a93"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
