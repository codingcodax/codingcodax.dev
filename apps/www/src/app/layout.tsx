import type { Metadata, Viewport } from 'next';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';

import { cn } from '@acme/ui';

import '~/app/globals.css';

import { CustomCursor } from '~/components/CustomCursor';
import { env } from '~/env';
import { Providers } from './providers';

export const metadata: Metadata = {
  metadataBase: new URL(
    env.VERCEL_ENV === 'production'
      ? 'https://www.codingcodax.dev'
      : 'http://localhost:3000',
  ),
  title: {
    default: 'Alexis Guzman',
    template: '%s | Alexis Guzman',
  },
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
  icons: [
    { rel: 'icon', url: '/favicons/favicon.ico' },
    {
      rel: 'apple-touch-icon',
      url: '/favicons/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'icon',
      url: '/favicons/favicon-32x32.png',
      sizes: '32x32',
      type: 'image/png',
    },
    {
      rel: 'icon',
      url: '/favicons/favicon-16x16.png',
      sizes: '16x16',
      type: 'image/png',
    },
    { rel: 'manifest', url: '/favicons/site.webmanifest' },
    {
      rel: 'mask-icon',
      url: '/favicons/safari-pinned-tab.svg',
      color: '#000000',
    },
  ],
  applicationName: 'TIQR',
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
          'min-h-screen bg-white p-2 font-sans antialiased dark:bg-black sm:p-4 md:p-6',
          GeistSans.variable,
          GeistMono.variable,
        )}
      >
        <CustomCursor />
        <Providers>{props.children}</Providers>
      </body>
    </html>
  );
}
