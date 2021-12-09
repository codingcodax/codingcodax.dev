import { styled } from '@/theme/theme.config';

const Heading = styled('h2', {
  color: '$headingColor',
  fontFamily: '$heading',
  fontWeight: '$bold',

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

    fontWeight: {
      normal: { fontWeight: '$normal' },
      bold: { fontWeight: '$bold' },
    },
  },
});

Heading.displayName = 'Heading';

export default Heading;
