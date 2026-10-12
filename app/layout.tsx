import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'Flow Break',
  description: 'A 5-minute creative, movement and journaling break.',
  manifest: '/manifest.webmanifest',
}
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F6B73A' },
    { media: '(prefers-color-scheme: dark)', color: '#26142F' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
