import { Box, Heading, Text } from '@/components/ui';

import Subscribe from '@/components/common/Subscribe';

const Newsletter = () => {
  return (
    <Box
      as='section'
      align='center'
      css={{ mt: '$32', maxWidth: '$container-sm' }}
    >
      <Heading
        as='h2'
        size={{ '@initial': '3xl', '@bp1': '4xl' }}
        css={{ mb: '$8' }}
      >
        Newsletter
      </Heading>
      <Text css={{ mb: '$2' }}>
        Subscribe to my digest. I{"'"}ll let you know when I publish new
        content, and I{"'"}ll even share exclusive newsletter-only content now
        and then.
      </Text>
      <Text css={{ mb: '$8' }}>No spam, unsubscribe at any time.</Text>

      <Subscribe />
    </Box>
  );
};

export default Newsletter;
