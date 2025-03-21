import './globals.css'
import { Inter, Archivo_Black } from 'next/font/google'
import { DarkModeProvider } from './utils/Darkmode'
import Script from 'next/script'
import Header from './components/Header'
import Footer from './components/Footer'
import BackTop from './components/BackTopButton'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const league = Archivo_Black({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-league',
  weight: '400',
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
        <head>
          <link rel="Canoniques" href="https://www.nelly-bise.fr"></link>
          {/* Google Tag Manager Script */}
          <Script
            id="GoogleTagManager"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){
                  w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                  var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:''; 
                  j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                  f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-PX9CTLPQ');`,
            }}
          />
          {/* Google Analytics Script */}
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-644Y34G8MP"
            strategy="afterInteractive"
          />
          <Script
            id="GoogleAnalytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-644Y34G8MP');`,
            }}
          />
          {/* Noscript for Google Tag Manager */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-PX9CTLPQ"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
        </head>

        <body className="flex flex-col justify-between min-h-screen">
          <BackTop />
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </DarkModeProvider>
  )
}
