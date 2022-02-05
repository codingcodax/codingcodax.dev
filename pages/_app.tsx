import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';

import SEO from '../next-seo.config';

import { darkTheme } from '@/theme/config/';
import globalStyles from '@/theme/globalStyles';

import Layout from '@/components/layout';

const MyApp = ({ Component, pageProps }: AppProps) => {
  globalStyles();

  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute='class'
      defaultTheme='system'
      value={{ light: 'light-theme', dark: darkTheme.toString() }}
    >
      <Layout>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};
export default MyApp;
