import { createStitches } from '@stitches/react';

import colors from './colors';
import fonts from './fonts';
import fontSizes from './fontSizes';
import utils from './utils';
import spaceTokens from './spaceTokens';
import darkModeConfig from './darkModeConfig';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors,
    fonts,
    fontSizes,
    space: { ...spaceTokens },
    fontWeights: {
      normal: 400,
      bold: 700,
    },
    lineHeights: {
      none: '1',
      normal: '1.25',
      relaxed: '1.650',
    },
    sizes: {
      ...spaceTokens,
      max: 'max-content',
      min: 'min-content',
      full: '100%',
      'container-sm': '640px',
      'container-md': '760px',
    },
    borderWidths: {},
    borderStyles: {},
    radii: {
      xs: '0.125rem',
      sm: '0.25rem',
      md: '8px',
      lg: '24px',
      full: '9999px',
    },
    shadows: {
      focus: '0 0 0 5px var(--colors-violet4)',
    },
    zIndices: {
      hide: -1,
      auto: 'auto',
      base: 0,
      docked: 10,
      dropdown: 1000,
      sticky: 1100,
      banner: 1200,
      overlay: 1300,
      modal: 1400,
      popover: 1500,
      skipLink: 1600,
      toast: 1700,
      tooltip: 1800,
    },
    transitions: {
      normal: '0.2s',
    },
  },
  media: {
    dark: '(prefers-color-scheme: dark)',
    bp1: '(min-width: 479px)',
    bp2: '(min-width: 760px)',
  },
  utils,
});

export const darkTheme = createTheme('darkTheme', darkModeConfig);
