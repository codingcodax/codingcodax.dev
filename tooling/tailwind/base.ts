import type { Config } from 'tailwindcss';

import { colors } from './colors';

export default {
  darkMode: ['class'],
  content: ['src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors,
      borderColor: {
        DEFAULT: 'hsl(var(--border))',
      },
    },
  },
} satisfies Config;
