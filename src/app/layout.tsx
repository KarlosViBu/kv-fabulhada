import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import { NavBar } from '@/components/ui/Navbar'
import { Bjamju } from '@/components/ui/font'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title:       'FabulHada',
  description: 'E-shop venta de productos artesanales ',
  keywords:    'artesania, personajes, magia, amor, prosperidad, armonia, talisman, salud, vitalidad, proteccion'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
      <main className={Bjamju.className}>
        {/* <NavBar/> */}
        {children}
      </main>
      </body>
    </html>
  )
}
