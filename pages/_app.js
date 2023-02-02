import '../styles/globals.css'
import '../styles/custom_ss.css'
import { Layout } from '../components/Layout/Layout'
import { DefaultSeo } from 'next-seo';
import SEO from "../next-seo.config";

export default function App({ Component, pageProps }) {
  return (<Layout><DefaultSeo{...SEO}/><Component {...pageProps} /></Layout>)
}
