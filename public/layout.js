import './globals.css'
import { Inter, Montserrat } from 'next/font/google'
import { DarkModeProvider } from './utils/Darkmode'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const league = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-league',
})

export const metadata = {
  title: 'Nelly Bise, développeuse front-end',
  description:
    "Développeuse front-end spécialisée en JavaScript et React. Je vous propose un travail soigneux axé sur la maintenabilité et l'accessibilité.",
  openGraph: {
    title: 'Nelly Bise, développeuse front-end',
    description:
      "Développeuse front-end spécialisée en JavaScript et React. Je vous propose un travail soigneux axé sur la maintenabilité et l'accessibilité.",
    type: 'website',
    url: 'https://nelly-bise.fr/',
    images: [
      {
        type: 'image/png',
        width: 500,
        height: 500,
        url: 'https://nelly-bise.fr/NELLY-BISE.png',
      },
    ],
    site_name: 'Nelly Bise, développeuse front-end',
    locale: 'fr_FR',
  },
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
