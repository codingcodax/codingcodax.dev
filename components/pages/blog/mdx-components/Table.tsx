import { Box } from '@/components/ui';

const Table = ({ props }: { props: any }) => (
  <Box
    as='table'
    css={{
      my: '$8',
      mx: '$auto',
      width: '$full',
      maxWidth: '$container-sm',

      '& th': { fontWeight: '$bold' },

      '& th, & td': {
        padding: '$2 0 $2 $4',
        textAlign: 'left',
        border: '1px solid $subtleBorder',
        borderCollapse: 'collapse',
      },
    }}
    {...props}
  />
);

export default Table;
