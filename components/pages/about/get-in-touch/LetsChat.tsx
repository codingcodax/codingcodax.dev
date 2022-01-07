import { Grid, Text } from '@/components/ui';

const LetsChat = () => {
  return (
    <Grid css={{ gridRowGap: '$5', alignContent: 'start' }}>
      <Text css={{ fontWeight: '$bold' }}>Let{"'"}s Chat</Text>
      <Text lineHeight='relaxed'>
        If you have any questions, opportunities or would just like to say hey
        then feel free to fill out my contact form and I{"'"}ll endeavour to get
        back to you as soon as I can.
      </Text>
      <Text lineHeight='relaxed'>
        Or if you would prefer to, you can also reach me on twitter and
        linkedin.
      </Text>
    </Grid>
  );
};

export default LetsChat;
