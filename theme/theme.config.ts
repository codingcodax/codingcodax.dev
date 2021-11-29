import { createStitches, PropertyValue, ScaleValue } from '@stitches/react';

const spaceTokens = {
  0: '0px',
  px: '1px',
  // 0.5: "0.125rem",
  1: '0.25rem',
  // 1.5: "0.375rem",
  2: '0.5rem',
  // 2.5: "0.625rem",
  3: '0.75rem',
  // 3.5: "0.875rem",
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem',
};

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
    colors: {
      neutral100: '#f4f4f4',
      neutral200: '#eaeaea',
      neutral300: '#d9d9d9',
      neutral400: '#a6a6a6',
      neutral500: '#8c8c8c',
      neutral600: '#595959',
      neutral700: '#404040',
      neutral800: '#303030',
      neutral900: '#202020',

      defaultLight: '#fcfcfc',
      defaultDark: '#232323',

      primary: '#805ad5',
      primaryDark: '#744ec8',

      textColor: '$defaultDark',
      backgroundColor: '$defaultLight',
    },
    space: { ...spaceTokens },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
    fonts: {
      heading:
        '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
      body: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
      mono: "'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    },
    fontsWeights: {
      regular: 400,
      bold: 700,
    },
    lineHeights: {},
    sizes: {
      ...spaceTokens,
      max: 'max-content',
      min: 'min-content',
      full: '100%',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '50rem',
      '5xl': '56rem',
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
    shadows: {},
    zIndices: {},
    transitions: {
      normal: '3s',
    },
  },
  media: {
    dark: '(prefers-color-scheme: dark)',
    bp1: '(min-width: 280px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 992px)',
    bp4: '(min-width: 1280px)',
    bp5: '(min-width: 1440px)',
  },
  utils: {
    p: (value: ScaleValue<'space'>) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: (value: ScaleValue<'space'>) => ({
      paddingTop: value,
    }),
    pr: (value: ScaleValue<'space'>) => ({
      paddingRight: value,
    }),
    pb: (value: ScaleValue<'space'>) => ({
      paddingBottom: value,
    }),
    pl: (value: ScaleValue<'space'>) => ({
      paddingLeft: value,
    }),
    px: (value: ScaleValue<'space'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: ScaleValue<'space'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    m: (value: ScaleValue<'space'>) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (value: ScaleValue<'space'>) => ({
      marginTop: value,
    }),
    mr: (value: ScaleValue<'space'>) => ({
      marginRight: value,
    }),
    mb: (value: ScaleValue<'space'>) => ({
      marginBottom: value,
    }),
    ml: (value: ScaleValue<'space'>) => ({
      marginLeft: value,
    }),
    mx: (value: ScaleValue<'space'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: ScaleValue<'space'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    w: (value: ScaleValue<'sizes'>) => ({
      width: value,
    }),
    h: (value: ScaleValue<'sizes'>) => ({
      height: value,
    }),
    boxSize: (value: ScaleValue<'sizes'>) => ({
      width: value,
      height: value,
    }),
    bg: (value: PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),
  },
  // prefix: 'radix',
});

const darkModeConfig = {
  colors: {},
};

export const darkTheme = createTheme('darkTheme', darkModeConfig);