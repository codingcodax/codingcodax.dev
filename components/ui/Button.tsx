import { styled } from '@/theme/config/';

const Button = styled('button', {
  w: '$max',
  appearance: 'none',
  display: 'inline-block',
  fontFamily: '$body',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  backgroundColor: 'transparent',
  border: '0px solid transparent',
  borderRadius: '$sm',
  transition: '$normal',
  cursor: 'pointer',

  variants: {
    size: {
      medium: {
        padding: '$2 $4',
        fontSize: '$lg',
        borderWidth: '1px',
      },
      large: {
        padding: '$3 $6',
        fontSize: '$xl',
        borderWidth: '3px',
      },
    },

    variant: {
      primary: {
        color: '$backgroundColor',
        bg: '$primary',
        borderColor: '$primary',

        '&:hover': {
          bg: '$primaryDark',
          borderColor: '$primaryDark',
        },
      },
      secondary: {
        color: '$backgroundColor',
        bg: '$highTextColor',
        borderColor: '$highTextColor',

        '&:hover': {
          color: '$highTextColor',
          bg: '$backgroundColor',
          borderColor: '$highTextColor',
        },
      },
      extra: {
        bg: '$uiElement',
        border: 'none',
        borderRadius: '$sm',
        cursor: 'pointer',

        '&:hover': {
          bg: '$hoverElement',
        },
      },
      unstyled: {},
    },

    outlined: {
      true: {
        bg: 'transparent',
      },
    },
  },

  defaultVariants: {
    size: 'medium',
    variant: 'secondary',
  },

  compoundVariants: [
    {
      variant: 'primary',
      outlined: true,

      css: {
        color: '$primary',
        bg: 'transparent',

        '&:hover': {
          color: '$backgroundColor',
          bg: '$primary',
          borderColor: '$primary',
        },
      },
    },
    {
      variant: 'secondary',
      outlined: true,

      css: {
        color: '$highTextColor',
        bg: 'transparent',

        '&:hover': {
          color: '$backgroundColor',
          bg: '$highTextColor',
        },
      },
    },
  ],
});

Button.displayName = 'Button';

export default Button;
