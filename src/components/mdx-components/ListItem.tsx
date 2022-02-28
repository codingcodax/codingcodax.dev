import { ArrowRightIcon } from '~/components/icons';
import { Box } from '~/components/ui';

const ListItem = ({ props }: { props: any }) => (
  <Box
    css={{
      display: 'flex',
      alignItems: 'flex-start',
      counterIncrement: 'var(--counter-name)',
      '&::before': {
        mr: '$3',
        content: "counters(var(--counter-name),'.') '. '",
        color: '$primary',
        fontWeight: '$bold',
      },
    }}
  >
    <ArrowRightIcon css={{ mr: '$3', h: '$5', color: '$primary' }} />
    <div {...props} />
  </Box>
);

export default ListItem;
