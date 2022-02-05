import { Box } from '@/components/ui';

const Code = ({ props }: { props: any }) => (
  <Box
    as='code'
    css={{
      py: '$1',
      px: '$2',
      fontFamily: 'mono',
      fontSize: '$sm',
      bg: '$subtleBackground',
      border: '1px solid $subtleBorder',
      borderRadius: '$sm',
    }}
    {...props}
  />
);

export default Code;
