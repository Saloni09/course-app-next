import Layout from '@/components/layout/layout';
import '@/styles/globals.css';
import {  CssBaseline } from "@mui/material";

export default function App({ Component, pageProps }) {
  return (<>
  <CssBaseline/>
  <Layout>
    <Component {...pageProps} />
  </Layout>
  </>)
}
