import './globals.css'
import { Inter, League_Gothic } from 'next/font/google'
import { DarkModeProvider } from './contexts/Darkmode'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const league = League_Gothic({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-league',
})

export const metadata = {
  title: 'Nelly Bise',
  description: 'Nelly Bise, développeuse Front-End',
}

export default function RootLayout({ children }) {
  return (
    <DarkModeProvider>
      <html
        lang="fr"
        className={`${inter.variable} ${league.variable} scroll-smooth`}
      >
        <body className="flex flex-col justify-between min-h-screen">
          {children}
        </body>
      </html>
    </DarkModeProvider>
  )
}
