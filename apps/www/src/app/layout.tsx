import type { Metadata, Viewport } from 'next';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';

import { cn } from '@acme/ui';
import { ThemeProvider, ThemeToggle } from '@acme/ui/theme';
import { Toaster } from '@acme/ui/toast';

import { TRPCReactProvider } from '~/trpc/react';

import '~/app/globals.css';

import { env } from '~/env';

export const metadata: Metadata = {
  metadataBase: new URL(
    env.VERCEL_ENV === 'production'
      ? 'https://www.codingcodax.dev'
      : 'http://localhost:3000',
  ),
  title: 'Alexis Guzman',
  description:
    'Front-end web wizard who enjoys creating a variety of tools and a continuous dedication to learning and self-development.',
  openGraph: {
    title: 'Alexis Guzman',
    description:
      'Front-end web wizard who enjoys creating a variety of tools and a continuous dedication to learning and self-development.',
    url: 'https://www.codingcodax.dev',
    siteName: 'Alexis Guzman',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@codingcodax',
    creator: '@codingcodax',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang='en'>
      <body
        className={cn(
          'min-h-screen bg-background font-sans text-foreground antialiased',
          GeistSans.variable,
          GeistMono.variable,
        )}
      >
        <ThemeProvider enableSystem attribute='class' defaultTheme='system'>
          <TRPCReactProvider>{props.children}</TRPCReactProvider>
          <div className='absolute bottom-4 right-4'>
            <ThemeToggle />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
