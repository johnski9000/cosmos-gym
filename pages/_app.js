import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const mont = Montserrat({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
      <main className={mont.className}>
      <Component {...pageProps} />
  </main>
  ) 

}
