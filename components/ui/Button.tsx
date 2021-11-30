import { styled } from '@/theme/theme.config';

const Button = styled('button', {
  appearance: 'none',
  border: '0px solid transparent',
  borderRadius: '$xs',
  backgroundColor: 'transparent',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  transition: '$normal',
  cursor: 'pointer',

  variants: {
    size: {
      medium: {
        padding: '$2 $4',
        fontSize: '$md',
        borderWidth: '2px',
      },
      large: {
        padding: '$3 $6',
        fontSize: '$lg',
        borderWidth: '3px',
      },
    },

    variant: {
      primary: {
        color: '$textColor',
        bg: '$primary',
        borderColor: '$primary',

        '&:hover': {
          bg: '$primaryDark',
          borderColor: '$primaryDark',
        },
      },
      secondary: {
        color: '$defaultDark',
        bg: '$defaultLight',
        borderColor: '$defaultLight',

        '&:hover': {
          bg: '$neutral300',
          borderColor: '$neutral300',
        },
      },
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
        color: '$backgroundColor',
        bg: 'transparent',

        '&:hover': {
          color: '$textColor',
          bg: '$backgroundColor',
          borderColor: '$backgroundColor',
        },
      },
    },
  ],
});

Button.displayName = 'Button';

export default Button;
