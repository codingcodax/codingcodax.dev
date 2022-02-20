import { Heading, MotionBox, Text, Grid } from '@/components/ui';

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
      <Text>I use the Gnome terminal with Oh My ZSH, framework for ZSH</Text>

      <Grid as='ul' direction='column' css={{ listStyleType: 'disc' }}>
        <Text as='li'>VS Code</Text>
      </Grid>
    </MotionBox>
  );
};

export default Uses;
