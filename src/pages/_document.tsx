import { Html, Head, Main, NextScript } from 'next/document';
import { FC } from 'react';

const Document: FC = () => (
  <Html>
    <Head>
      <link rel="shortcut icon" href="/icon.png" />
    </Head>
    <body className="min-h-screen bg-gray-200">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
