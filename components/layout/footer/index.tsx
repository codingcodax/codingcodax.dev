import useMediaQuery from '@/hooks/useMediaQuery';

import { Box, Divider, Text } from '@/components/ui';
import MobileLinks from './mobile-links';
import Links from './links';

const Footer = () => {
  const isMobileSize = useMediaQuery('(max-width: 479px)');

  return (
    <Box css={{ mt: '$32', display: 'grid', gridRowGap: '$8' }}>
      <Divider />

      {isMobileSize ? <MobileLinks /> : <Links />}

      <Text css={{ textAlign: 'center' }}>
        © 2021 — Handcrafted with 💜 by Codax ^_^
      </Text>
    </Box>
  );
};

export default Footer;
