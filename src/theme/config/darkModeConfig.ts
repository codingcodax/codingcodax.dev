import { mauveDark, violetDark, redDark, greenDark } from '@radix-ui/colors';

const darkModeConfig = {
  colors: {
    ...mauveDark,
    ...violetDark,
    ...redDark,
    ...greenDark,

    error: '$red11',
    success: '$green11',

    primary: '$violet9',
    primaryDark: '$violet10',

    backgroundColor: '$mauve1',
    subtleBackground: '$mauve2',
    uiElement: '$mauve3',
    hoverElement: '$mauve4',
    activeElement: '$mauve5',
    subtleBorder: '$mauve6',
    normalBorder: '$mauve7',
    hoverBorder: '$mauve8',
    solidBackground: '$mauve9',
    hoverBackground: '$mauve10',
    lowTextColor: '$mauve11',
    highTextColor: '$mauve12',
  },
};

export default darkModeConfig;
