import { inputVariants } from '~/animations/pages';
import { Box, Heading, MotionBox, Text } from '~/components/ui';
import { Seo } from '~/components/atoms';
import { Projects as AllProjects } from '~/components/containers';

const Projects = () => {
  return (
    <MotionBox
      align='center'
      animate='show'
      css={{ w: '$full', maxWidth: '800px', flexDirection: 'column' }}
      initial='hidden'
      variants={inputVariants}
    >
      <Seo name='Projects 🎲' path='/projects' />

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
    </MotionBox>
  );
};

export default Projects;
