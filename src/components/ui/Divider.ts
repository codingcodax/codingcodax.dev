import { styled } from '~/theme/config';

const Divider = styled('hr', {
  width: '100%',
  border: '0px solid $subtleBorder',
  borderTopWidth: '1px',
});

Divider.displayName = 'Divider';

export default Divider;
