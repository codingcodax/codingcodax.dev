import { createStitches, PropertyValue, ScaleValue } from '@stitches/react';

const spaceTokens = {
  auto: 'auto',
  0: '0px',
  px: '1px',
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  2.5: '0.625rem',
  3: '0.75rem',
  3.5: '0.875rem',
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
      mauve100: '#111114',
      mauve200: '#19191D',
      mauve300: '#27262C',
      mauve400: '#323138',
      mauve500: '#44434B',
      mauve600: '#52515A',
      mauve700: '#5F5E68',
      mauve800: '#72717D',
      mauve900: '#868593',
      mauve1000: '#9A98A7',
      mauve1100: '#AEADB8',
      mauve1200: '#C0BFC9',
      mauve1300: '#D5D4DD',
      mauve1400: '#E6E6F3',
      mauve1500: '#F8F8FF',

      violet500: '#8e43ed',
      violet600: '#7b38d0',

      primary: '$violet500',
      primaryDark: '$violet600',

      headingColor: '$mauve100',
      textColor: '$mauve400',
      grayTextColor: '$mauve500',
      backgroundColor: '$mauve1500',
      dividerColor: '$mauve800',
      grayLightColor: '$mauve1200',
      grayDarkColor: '$mauve1300',
      shadowColor: '$mauve1400',
    },
    space: { ...spaceTokens },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.925rem',
      md: '1.025rem',
      lg: '1.1rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',

      base: '$lg',
    },
    fonts: {
      heading:
        '    -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";',
      body: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
      mono: "'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    lineHeights: {
      normal: '1.25',
    },
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
    shadows: {
      focus: '0 0 0 3px rgba(66, 153, 225, 0.6)',
    },
    zIndices: {},
    transitions: {
      normal: '0.2s',
    },
  },
  media: {
    dark: '(prefers-color-scheme: dark)',
    bp1: '(min-width: 479px)',
    bp2: '(min-width: 760px)',
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
});

const darkModeConfig = {
  colors: {
    headingColor: '$mauve1500',
    textColor: '$mauve1300',
    grayTextColor: '$mauve1200',
    backgroundColor: '$mauve100',
    dividerColor: '$mauve700',
    grayLightColor: '$mauve400',
    grayDarkColor: '$mauve300',
    shadowColor: '$mauve200',
  },
};

export const darkTheme = createTheme('darkTheme', darkModeConfig);
