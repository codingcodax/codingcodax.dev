import { globalCss } from '@stitches/react';

import { reset } from './reset.css';

const globalStyles = globalCss({
  ...reset,
  '*, *:before, *:after': {
    boxSizing: 'border-box',
    outline: 'none',
  },

  'button:focus': {
    boxShadow: '$focus',
  },

  body: {
    fontFamily: '$body',
    fontSize: '$base',
    color: '$textColor',
    backgroundColor: '$backgroundColor',
  },

  '#__next': {
    padding: '$2 $4',
    margin: '0 auto',
    minHeight: '100vh',
    maxWidth: '1200px',
    display: 'grid',
    gridTemplate: 'auto 1fr auto / 1fr',

    '@media screen and (min-width: 30rem)': {
      padding: '$8',
    },
  },

  'h1, h2, h3, h4, h5, h6': { fontWeight: '$bold' },

  h1: { fontSize: '$5xl' },
  h2: { fontSize: '$4xl' },
  h3: { fontSize: '$3xl' },
  h4: { fontSize: '$2xl' },
  h5: { fontSize: '$xl' },
  h6: { fontSize: '$lg' },
});

export default globalStyles;
