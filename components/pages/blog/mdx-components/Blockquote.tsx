import { Box } from '@/components/ui';

const Blockquote = ({ props }: { props: any }) => (
  <Box
    as='blockquote'
    css={{
      my: '$8',
      mx: '$auto',
      py: '$4',
      px: '$8',
      maxWidth: '$container-sm',
      bg: '$subtleBackground',
      borderLeft: '3px solid $primary',
      borderTopRightRadius: '$sm',
      borderBottomRightRadius: '$sm',

      '& p': {
        mb: '$0',
      },
    }}
    {...props}
  />
);

export default Blockquote;
