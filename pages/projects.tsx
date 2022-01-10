import { Box, Heading, Text } from '@/components/ui';

import AllProjects from '@/components/common/projects';

const Projects = () => {
  return (
    <Box
      align='center'
      css={{ w: '$full', maxWidth: '800px', flexDirection: 'column' }}
    >
      <Box align='center' css={{ mb: '$20', maxWidth: '$container-sm' }}>
        <Heading as='h1' css={{ mt: '$12', mb: '$20' }}>
          Projects 🎲
        </Heading>
        <Text>
          Hey there! Here you will find my preferred projects that I have done
          throughout my career with different technologies, I hope you have fun
          seeing each.
        </Text>
      </Box>

      <AllProjects />
    </Box>
  );
};

export default Projects;
