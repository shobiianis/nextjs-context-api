
import AuthControler from '@/context/AuthControler'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return  <AuthControler> <Component {...pageProps} /></AuthControler> 
}
