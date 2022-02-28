import type { AppProps } from 'next/app';
import Router from 'next/router';
import { ThemeProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';
import ProgressBar from '@badrap/bar-of-progress';

import { darkTheme } from '~/theme/config/';
import globalStyles from '~/theme/globalStyles';
import { Page } from '~/components/layouts';

import SEO from 'next-seo.config';

const progress = new ProgressBar({
  size: 5,
  color: 'var(--colors-primary)',
  className: 'bar-of-progress',
  delay: 100,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

const MyApp = ({ Component, pageProps }: AppProps) => {
  globalStyles();

  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute='class'
      defaultTheme='system'
      value={{ light: 'light-theme', dark: darkTheme.toString() }}
    >
      <Page>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </Page>
    </ThemeProvider>
  );
};
export default MyApp;
