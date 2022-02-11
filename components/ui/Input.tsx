import { styled } from '@/theme/config/';

const Input = styled('input', {
  p: '$2',
  h: '$full',
  w: '$full',
  fontSize: '$base',
  color: '$lowTextColor',
  bg: 'transparent',
  border: '2px solid $normalBorder',
  borderRadius: '$sm',
  transition: 'border $normal ease-in-out',

  '&::placeholder': {
    color: '$lowTextColor',
  },

  '&:hover, &:focus': {
    borderColor: '$hoverBorder',
  },

  '&:focus': {
    boxShadow: '$focus',
  },
});

Input.displayName = 'Input';

export default Input;
