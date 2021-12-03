// import useMediaQuery from '@/hooks/useMediaQuery';

import { Box, Divider, Text } from '@/components/ui';

const Footer = () => {
  // const isMobileSize = useMediaQuery('(max-width: 479px)');

  return (
    <Box css={{ display: 'grid', gridRowGap: '$8' }}>
      <Divider />

      <Text css={{ textAlign: 'center' }}>Copyright © 2021 Alexis Guzman</Text>
    </Box>
  );
};

export default Footer;
