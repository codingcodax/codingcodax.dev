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
        fontSize: '$md',
        borderWidth: '1px',
      },
      large: {
        padding: '$3 $6',
        fontSize: '$lg',
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
        bg: '$textColor',
        borderColor: '$textColor',

        '&:hover': {
          color: '$textColor',
          bg: '$backgroundColor',
          borderColor: '$textColor',
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
          color: '$textColor',
          bg: '$primary',
          borderColor: '$primary',
        },
      },
    },
    {
      variant: 'secondary',
      outlined: true,

      css: {
        color: '$textColor',
        bg: 'transparent',

        '&:hover': {
          color: '$backgroundColor',
          bg: '$textColor',
        },
      },
    },
  ],
});

Button.displayName = 'Button';

export default Button;
