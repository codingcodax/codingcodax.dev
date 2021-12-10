import { styled } from '@/theme/theme.config';

const Text = styled('p', {
  color: '$textColor',
  fontSize: '$base',
  lineHeight: '$relaxed',
});

Text.displayName = 'Text';

export default Text;
