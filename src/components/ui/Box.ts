import { styled } from '~/theme/config';

const Box = styled('div', {
  variants: {
    align: {
      center: {
        mx: '$auto',
      },
    },
  },
});

Box.displayName = 'Box';

export default Box;
