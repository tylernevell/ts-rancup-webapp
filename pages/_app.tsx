import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { GlobalLayout } from '../components/global-layout/global-layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>RancUp</title>
        <meta name="description" content="RancUp Description (TODO)" />
        <meta name="author" content="RancUp" />
        <meta name="keywords” content=”RancUp Keywords (TODO)" />
        <meta name="twitter:card" content="summary_large_image (TODO)" />
        <meta name="twitter:site" content="(RANCUP TWITTER) (TODO)" />
        <meta
          name="twitter:creator"
          content="@(RANCUP TWITTER HANDLE) (TODO)"
        />
        <meta property="og:url" content="https://rancup.com/" />
        <meta property="og:title" content="RancUp: Insert Title (TODO)" />
        <meta property="og:description" content="Rancup Description (TODO)" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image" content="(TODO) (RANCUP PREVIEW IMAGE)" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="315" />
        <meta
          property="og:image:alt"
          content="Rancup preview image alt (TODO)"
        />
        <meta name="generator" content="NextJS" />
      </Head>
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
    </>
  );
}

export default MyApp;
