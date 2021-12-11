import NextLink from 'next/link';

import { Box, Button, Heading } from '@/components/ui';
import Projects from '@/components/common/projects';

const FeaturedProjects = () => {
  return (
    <Box
      as='section'
      css={{
        display: 'grid',
        placeItems: 'center',
        gridRowGap: '$8',
        '@bp1': { gridRowGap: '$16' },
      }}
    >
      <Heading
        as='h2'
        size={{ '@initial': '3xl', '@bp1': '4xl' }}
        css={{ textAlign: 'center' }}
      >
        Featured Projects
      </Heading>

      <Projects featured />

      <NextLink href='/projects' passHref>
        <Button as='a' variant='primary' css={{ textDecoration: 'none' }}>
          See All Projects
        </Button>
      </NextLink>
    </Box>
  );
};

export default FeaturedProjects;
