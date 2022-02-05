import { Box } from '@/components/ui';

const UnorderedList = ({ props }: { props: any }) => (
  <Box
    as='ul'
    css={{
      mx: '$auto',
      maxWidth: '$container-sm',
      display: 'grid',
      gridRowGap: '$2',
      listStyleType: 'disc',
    }}
    {...props}
  />
);

export default UnorderedList;
