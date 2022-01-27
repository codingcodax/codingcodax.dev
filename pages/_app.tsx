import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

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
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};
export default MyApp;
