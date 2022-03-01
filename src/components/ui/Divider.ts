import * as SeparatorPrimitive from '@radix-ui/react-separator';

import { styled } from '~/theme/config';

const Divider = styled(SeparatorPrimitive.Root, {
  bg: '$subtleBorder',
  '&[data-orientation=horizontal]': { height: '1px', w: '$full' },
  '&[data-orientation=vertical]': { h: '$full', width: 1 },
});

Divider.displayName = 'Divider';

export default Divider;
