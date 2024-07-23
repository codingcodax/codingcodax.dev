import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

import base from './base';

export default {
  content: base.content,
  presets: [base],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'logo-cloud': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - 4rem))' },
        },
        'logo-cloud-reverse': {
          from: { transform: 'translateX(calc(-100% - 4rem))' },
          to: { transform: 'translateX(0)' },
        },
        'fade-up': {
          from: {
            opacity: '0',
            transform: 'translateY(var(--fade-distance, .25rem))',
          },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'logo-cloud': 'logo-cloud 30s linear infinite',
        'logo-cloud-reverse': 'logo-cloud-reverse 30s linear infinite',
        'fade-up': 'fade-up 1s ease-out forwards',
      },
    },
  },
  plugins: [animate],
} satisfies Config;
