import { useMediaQuery } from '~/hooks';
import { Box, Divider, Text } from '~/components/ui';

import MobileLinks from './links/MobileLinks';
import FooterLinks from './links/FooterLinks';

const Footer = () => {
  const isMobileSize = useMediaQuery('(max-width: 479px)');

  return (
    <Box css={{ mt: '$32', display: 'grid', gridRowGap: '$8' }}>
      <Divider />

      {isMobileSize ? <MobileLinks /> : <FooterLinks />}

      <Text css={{ textAlign: 'center' }}>
        © 2023 — Handcrafted with 💜 by Codax ^_^
      </Text>
    </Box>
  );
};

export default Footer;
