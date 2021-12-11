import useMediaQuery from '@/hooks/useMediaQuery';

import { Box, Divider, Text } from '@/components/ui';
import MobileLinks from './MobileLinks';
import Links from './links';

const Footer = () => {
  const isMobileSize = useMediaQuery('(max-width: 479px)');

  return (
    <Box css={{ display: 'grid', gridRowGap: '$8' }}>
      <Divider />

      {isMobileSize ? <MobileLinks /> : <Links />}

      <Text css={{ textAlign: 'center' }}>Copyright © 2021 Alexis Guzman</Text>
    </Box>
  );
};

export default Footer;
