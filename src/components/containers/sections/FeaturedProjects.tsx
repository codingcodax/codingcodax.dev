import { Box, Button, Heading } from '~/components/ui';
import { Link } from '~/components/atoms';
import { Projects } from '~/components/containers';

const FeaturedProjects = () => {
  return (
    <Box
      as='section'
      css={{
        display: 'grid',
        placeItems: 'center',
        gridRowGap: '$8',
        '@bp1': { gridRowGap: '$16' },
        scrollMarginTop: '$10',
      }}
      id='projects'
    >
      <Heading
        as='h2'
        css={{ textAlign: 'center' }}
        size={{ '@initial': '3xl', '@bp1': '4xl' }}
      >
        Featured Projects
      </Heading>

      <Projects featured />

      <Link href='/projects'>
        <Button as='a' css={{ textDecoration: 'none' }} variant='primary'>
          See All Projects
        </Button>
      </Link>
    </Box>
  );
};

export default FeaturedProjects;
