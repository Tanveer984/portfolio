"use client"
import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from '../contextApi/ThemeContext';
import AuthProvider from '@/components/AuthProvider/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mohd Tanveer',
  description: 'one of the best portfolio site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

          <ThemeProvider>
          <AuthProvider>
        <div className='container'>
            <Navbar />
            {children}
            <Footer />
        </div>
          </AuthProvider>
          </ThemeProvider>
      </body>
    </html>
  )
}
