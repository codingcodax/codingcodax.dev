import { ThemeProvider } from 'next-themes';

import { TRPCReactProvider } from '~/trpc/react';

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider enableSystem attribute='class' defaultTheme='system'>
      <TRPCReactProvider>{children}</TRPCReactProvider>
    </ThemeProvider>
  );
};
