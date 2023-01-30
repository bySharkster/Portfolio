import '../styles/globals.css'
import '../styles/custom_ss.css'
import { Layout } from '../components/Layout/Layout'

export default function App({ Component, pageProps }) {
  return (<Layout><Component {...pageProps} /></Layout>)
}
