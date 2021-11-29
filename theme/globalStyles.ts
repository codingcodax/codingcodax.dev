import { globalCss } from '@stitches/react';

import { reset } from './reset.css';

const globalStyles = globalCss({
  ...reset,
  '*, *:before, *:after': {
    boxSizing: 'border-box',
  },

  body: {
    fontFamily: '$body',
    color: '$defaultLight',
    backgroundColor: '$defaultDark',
  },
});

export default globalStyles;
