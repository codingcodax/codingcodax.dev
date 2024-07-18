import type { Metadata, Viewport } from 'next';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';

import { cn } from '@acme/ui';

import '~/app/globals.css';

import { env } from '~/env';
import { Providers } from './providers';

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
          'min-h-screen bg-white p-6 font-sans antialiased dark:bg-black',
          GeistSans.variable,
          GeistMono.variable,
        )}
      >
        <Providers>{props.children}</Providers>
      </body>
    </html>
  );
}
