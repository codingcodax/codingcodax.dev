import type { Metadata, Viewport } from 'next';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';

import { cn } from '@acme/ui';

import '~/app/globals.css';

import { env } from '~/env';
import { Header } from './_components/Header';
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
        <div className='relative flex flex-col rounded-3xl border border-grey-line bg-grey-base'>
          <Providers>
            <div className='absolute left-0 top-[68px] h-px w-full bg-grey-line' />

            <Header />
            <div className='relative mx-auto w-full max-w-screen-lg pb-[68px]'>
              <div className='absolute -left-px top-0 h-full w-px bg-grey-line' />
              <div className='absolute left-1/3 top-0 h-full w-px border border-dashed border-grey-bg-hover' />
              {props.children}
              <div className='absolute right-1/3 top-0 h-full w-px border border-dashed border-grey-bg-hover' />
              <div className='absolute -right-px top-0 h-full w-px bg-grey-line' />
            </div>

            <div className='absolute bottom-[68px] left-0 h-px w-full bg-grey-line' />
          </Providers>
        </div>
      </body>
    </html>
  );
}
