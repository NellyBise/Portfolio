import "./globals.css";
import { Inter, League_Gothic } from 'next/font/google'
 
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-inter",
})
 
export const league = League_Gothic({
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-league",
})

export const metadata = {
  title: "Nelly Bise",
  description: "Nelly Bise, développeuse Front-End",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.variable} ${league.variable}`}>
      <body >{children}</body>  
    </html>
  );
}
