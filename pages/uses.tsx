import { Heading, MotionBox, Text } from '@/components/ui';

import Seo from '@/components/common/Seo';

const Uses = () => {
  return (
    // @ts-ignore next-line
    <MotionBox as='main' align='center' css={{ maxWidth: '$container-sm' }}>
      <Seo name='Uses 🔌' path='/uses' />

      <Heading as='h1' css={{ mt: '$12' }}>
        Uses 🔌
      </Heading>
      <Text>
        Here{"'"}s what tech, software and hardware I currently use day-to-day.
      </Text>

      <Heading as='h2'>📑 Terminal + Editors</Heading>
      <Text></Text>
    </MotionBox>
  );
};

export default Uses;
