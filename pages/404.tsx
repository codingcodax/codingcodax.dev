import { NextPage } from 'next';

import { Button, Center, Box, Text, Heading } from '@/components/ui';
import Link from '@/components/common/Link';

const Custom404: NextPage = () => {
  return (
    <Box css={{ position: 'relative' }}>
      <Center css={{ w: '$full', position: 'absolute' }}>
        <Text
          css={{
            fontSize: '600px',
            color: '$subtleBackground',
            lineHeight: '$none',
          }}
        >
          404
        </Text>
      </Center>

      <Center
        css={{
          mx: '$auto',
          h: '$full',
          maxWidth: '$100px',
          flexDirection: 'column',
          alignItems: 'start',
          position: 'relative',
          zIndex: '$modal',
        }}
      >
        <Heading size='9xl' fontWeight='bold'>
          Oops!
        </Heading>
        <Heading as='h1' fontWeight='normal' css={{ mb: '$10' }}>
          Looks like something went wrong and the page you are looking can{"'"}t
          be found
        </Heading>
        <Link href='/'>
          <Button
            as='a'
            variant='primary'
            size='large'
            css={{ textDecoration: 'none' }}
          >
            Let{"'"}s go back
          </Button>
        </Link>
      </Center>
    </Box>
  );
};

export default Custom404;
