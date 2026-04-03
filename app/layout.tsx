import './globals.css'
import '@mantine/core/styles.css'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import type { Metadata } from 'next'
import GoogleTag from '@/components/GoogleTag'
import HeadMetas from '@/components/HeadMetas'
import MetaPixel from '@/components/MetaPixel'

export const metadata: Metadata = {
  title: 'S5 | Online Casino Philippines | ₱1000 Bonus',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <GoogleTag />
        <HeadMetas />
        <MetaPixel />
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  )
}
