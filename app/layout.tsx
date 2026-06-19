import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Anuj Kumar — RPA Developer Portfolio',
  description: 'Senior RPA Developer specializing in Automation Anywhere, SAP, and Enterprise Automation.',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' fill='%236366F1'>⚙️</text></svg>" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
