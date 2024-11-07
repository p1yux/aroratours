import { Poppins } from 'next/font/google'
import "./globals.css"


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export default function Layout({ children }) {
  return (
    <html className={poppins.className}>
      <body>
        {children}
      </body>
    </html>
  );
}