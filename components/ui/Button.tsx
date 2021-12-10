import { styled } from '@/theme/theme.config';

const Button = styled('button', {
  w: '$max',
  appearance: 'none',
  display: 'inline-block',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  backgroundColor: 'transparent',
  border: '0px solid transparent',
  borderRadius: '$xs',
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
        bg: '$headingColor',
        borderColor: '$headingColor',

        '&:hover': {
          color: '$headingColor',
          bg: '$backgroundColor',
          borderColor: '$headingColor',
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
          color: '$headingColor',
          bg: '$primary',
          borderColor: '$primary',
        },
      },
    },
    {
      variant: 'secondary',
      outlined: true,

      css: {
        color: '$headingColor',
        bg: 'transparent',

        '&:hover': {
          color: '$backgroundColor',
          bg: '$headingColor',
        },
      },
    },
  ],
});

Button.displayName = 'Button';

export default Button;
