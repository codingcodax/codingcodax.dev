import { mauveDark, violetDark } from '@radix-ui/colors';

const darkModeConfig = {
  colors: {
    ...mauveDark,
    ...violetDark,

    primary: violetDark.violet9,
    primaryDark: violetDark.violet10,

    backgroundColor: mauveDark.mauve1,
    subtleBackground: mauveDark.mauve2,
    uiElement: mauveDark.mauve3,
    hoverElement: mauveDark.mauve4,
    activeElement: mauveDark.mauve5,
    subtleBorder: mauveDark.mauve6,
    normalBorder: mauveDark.mauve7,
    hoverBorder: mauveDark.mauve8,
    solidBackground: mauveDark.mauve9,
    hoverBackground: mauveDark.mauve10,
    lowTextColor: mauveDark.mauve11,
    highTextColor: mauveDark.mauve12,
  },
};

export default darkModeConfig;
