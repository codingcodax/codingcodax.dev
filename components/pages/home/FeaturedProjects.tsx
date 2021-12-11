import { Box, Button, Heading } from '@/components/ui';

import Projects from '@/components/common/projects';
import Link from '@/components/common/Link';

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

      <Link href='/projects'>
        <Button as='a' variant='primary' css={{ textDecoration: 'none' }}>
          See All Projects
        </Button>
      </Link>
    </Box>
  );
};

export default FeaturedProjects;
