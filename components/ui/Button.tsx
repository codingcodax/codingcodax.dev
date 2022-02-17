import { styled } from '@/theme/config/';

const Button = styled('button', {
  w: '$max',
  appearance: 'none',
  display: 'inline-block',
  fontFamily: '$body',
  fontWeight: 'bold',
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
        textTransform: 'uppercase',
        color: '$highTextColor',
        borderColor: '$highTextColor',
        position: 'relative',
        fontWeight: '$bold',
        '&::after': {
          h: '$full',
          w: '$full',
          content: '',
          bg: '$uiElement',
          borderRadius: '$sm',
          position: 'absolute',
          left: '10px',
          top: '10px',
          zIndex: '$hide',
          transition: '0.35s cubic-bezier(0.25, 0.1, 0, 2.05)',
          transitionProperty: 'top, right, bottom, left',
        },
        '&:hover:after, &:focus:after': {
          h: '$full',
          w: '$full',
          left: '0',
          top: '0',
        },
        '&:active::after': {
          bg: '$activeElement',
        },
      },
      secondary: {
        color: '$highTextColor',
        borderColor: '$highTextColor',
        '&:hover': {
          color: '$backgroundColor',
          bg: '$highTextColor',
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
    cta: { true: {} },
  },

  defaultVariants: {
    size: 'medium',
    variant: 'secondary',
  },

  compoundVariants: [
    {
      variant: 'primary',
      cta: true,

      css: {
        '&::after': {
          bg: '$primary',
        },
        '&:hover:after, &:focus:after': {
          bg: '$primary',
        },
      },
    },
  ],
});

Button.displayName = 'Button';

export default Button;
