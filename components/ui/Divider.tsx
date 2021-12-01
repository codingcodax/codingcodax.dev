import { styled } from '@/theme/theme.config';

const Divider = styled('hr', {
  width: '100%',
  border: '0px solid $dividerColor',
  borderTopWidth: '1px',
});

Divider.displayName = 'Divider';

export default Divider;
