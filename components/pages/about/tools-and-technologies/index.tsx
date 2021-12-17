import { Box, Text } from '@/components/ui';

import SectionHeading from '../common/SectionHeading';

const ToolsAndTechnologies = () => {
  return (
    <Box css={{ w: '$full', maxWidth: '$container-sm' }} d>
      <SectionHeading>Tools & Technologies</SectionHeading>
      <Text lineHeight='relaxed'>
        One of my favorite things since I starting to learn to code has been to
        see all of the amazing tools other humans have created to make other
        humans{"'"} lives easier. Here are some of the tools I utilise most
        regularly.
      </Text>
    </Box>
  );
};

export default ToolsAndTechnologies;
