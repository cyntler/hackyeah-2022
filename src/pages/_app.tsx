import type { AppProps } from 'next/app';
import { FC } from 'react';
import Head from 'next/head';
import '../styles/globals.css';
import { APP_TITLE } from '../models';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>{APP_TITLE}</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
