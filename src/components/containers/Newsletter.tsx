import { Box, Heading, Text } from '~/components/ui';
import { Subscribe } from '~/components/atoms';

const Newsletter = () => {
  return (
    <Box
      align='center'
      as='section'
      css={{ mt: '$32', maxWidth: '$container-sm' }}
    >
      <Heading
        as='h2'
        css={{ mb: '$8' }}
        size={{ '@initial': '3xl', '@bp1': '4xl' }}
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
