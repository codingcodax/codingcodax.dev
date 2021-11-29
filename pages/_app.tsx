import type { AppProps } from 'next/app';

import globalStyles from '@/theme/globalStyles';

const MyApp = ({ Component, pageProps }: AppProps) => {
  globalStyles();

  return <Component {...pageProps} />;
};
export default MyApp;
