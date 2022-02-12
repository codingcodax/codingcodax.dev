import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '../theme/config/';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta content='IE=edge' httpEquiv='X-UA-Compatible' />
          <meta content='width=device-width, initial-scale=1' name='viewport' />
          <meta content='#6e56cf' name='theme-color' />
          <meta content='#ededef' name='msapplication-TileColor' />
          <meta
            content='/favicons/browserconfig.xml'
            name='msapplication-config'
          />
          <link href='/favicons/favicon.ico' rel='shortcut icon' />
          <link href='/favicons/site.webmanifest' rel='manifest' />
          <link
            href='/favicons/apple-touch-icon.png'
            rel='apple-touch-icon'
            sizes='180x180'
          />
          <link
            href='/favicons/favicon-32x32.png'
            rel='icon'
            sizes='32x32'
            type='image/png'
          />
          <link
            href='/favicons/favicon-16x16.png'
            rel='icon'
            sizes='16x16'
            type='image/png'
          />
          <style
            id='stitches'
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
