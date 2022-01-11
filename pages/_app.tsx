import '../styles/bootstrap.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app'
import React from 'react';
import { APP_NAME } from '../utils/config';
import Head from 'next/head';
import LoaderHoc from '../hoc/LoaderHoc';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>{APP_NAME}</title>
      </Head>
      <Component {...pageProps} />
      <LoaderHoc />
    </React.Fragment>
  )
}

export default MyApp
