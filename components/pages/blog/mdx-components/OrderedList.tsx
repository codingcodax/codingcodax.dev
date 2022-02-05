import { Box } from '@/components/ui';

const OrderedList = ({ props }: { props: any }) => (
  <Box
    as='ol'
    css={{
      pl: '$8',
      mx: '$auto',
      maxWidth: '$container-sm',
      display: 'grid',
      gridRowGap: '$2',
      '--counter-name': 'counts',
      counterReset: 'var(--counter-name)',
      '& svg': {
        display: 'none',
      },
    }}
    {...props}
  />
);

export default OrderedList;
