// @ts-check
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import { DEFAULT_LOCALE_SETTING, LOCALES_SETTING } from './src/config/locales';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.codingcodax.dev',
  base: '/',
  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/u/**',
      },
    ],
  },

  i18n: {
    defaultLocale: DEFAULT_LOCALE_SETTING,
    locales: Object.keys(LOCALES_SETTING),
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
});
