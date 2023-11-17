import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/Header'
import { cn } from '@lib/utils'
import { ThemeProvider } from '@/components/ThemeProvider'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'Acendi Demo',
  description: 'Demo for acendi rebuild',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,)
        }>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />



        {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
