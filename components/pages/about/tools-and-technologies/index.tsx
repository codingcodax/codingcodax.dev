import { Box, Text } from '@/components/ui';

import SectionHeading from '../common/SectionHeading';
import Skills from './skills';

const ToolsAndTechnologies = () => {
  return (
    <>
      <SectionHeading>Tools & Technologies</SectionHeading>
      <Box align='center' css={{ mb: '$20', maxWidth: '$container-sm' }}>
        <Text lineHeight='relaxed' css={{ mb: '$20' }}>
          One of my favorite things since I starting to learn to code has been
          to see all of the amazing tools other humans have created to make
          other humans{"'"} lives easier. Here are some of the tools I utilise
          most regularly.
        </Text>
        <Skills />
      </Box>
    </>
  );
};

export default ToolsAndTechnologies;
