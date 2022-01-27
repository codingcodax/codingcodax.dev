import { styled } from '@/theme/config/';

const Text = styled('p', {
  color: '$highTextColor',
  fontSize: '$base',
  lineHeight: '$normal',

  variants: {
    size: {
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
      '2xl': { fontSize: '$2xl' },
      '3xl': { fontSize: '$3xl' },
      '4xl': { fontSize: '$4xl' },
      '5xl': { fontSize: '$5xl' },
      '6xl': { fontSize: '$6xl' },
      '7xl': { fontSize: '$7xl' },
      '8xl': { fontSize: '$8xl' },
      '9xl': { fontSize: '$9xl' },
    },

    lineHeight: {
      relaxed: { lineHeight: '$relaxed' },
    },
  },
});

Text.displayName = 'Text';

export default Text;
