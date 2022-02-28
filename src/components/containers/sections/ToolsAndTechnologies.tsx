import { Box, Text } from '~/components/ui';
import { SectionHeading } from '~/components/atoms';

import Skills from '../Skills';

const ToolsAndTechnologies = () => {
  return (
    <Box align='center' as='section' css={{ mb: '$20' }}>
      <SectionHeading>Tools & Technologies</SectionHeading>
      <Box align='center' css={{ maxWidth: '$container-sm' }}>
        <Text css={{ mb: '$20' }} lineHeight='relaxed'>
          One of my favorite things since I starting to learn to code has been
          to see all of the amazing tools other humans have created to make
          other humans{"'"} lives easier. Here are some of the tools I utilise
          most regularly.
        </Text>
        <Skills />
      </Box>
    </Box>
  );
};

export default ToolsAndTechnologies;
