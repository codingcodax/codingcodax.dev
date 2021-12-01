import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import globalStyles from '@/theme/globalStyles';

import Layout from '@/components/layout';

const MyApp = ({ Component, pageProps }: AppProps) => {
  globalStyles();

  return (
    <ThemeProvider defaultTheme='system'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};
export default MyApp;
