import { styled } from '@/theme/theme.config';

const Input = styled('input', {
  p: '$2',
  h: '$full',
  w: '$full',
  fontSize: '$base',
  color: '$grayTextColor',
  bg: 'transparent',
  border: '2px solid $dividerColor',
  borderRadius: '$sm',

  '&::placeholder': {
    color: '$grayTextColor',
    opacity: '0.4',
  },

  '&:hover, &:focus': {
    borderColor: '$primaryDark',
  },
});

Input.displayName = 'Input';

export default Input;
