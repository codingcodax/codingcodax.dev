import { Grid } from '@/components/ui';
import SectionHeading from '../common/SectionHeading';
import Form from './Form';
import LetsChat from './LetsChat';

const GetInTouch = () => {
  return (
    <section id='contact'>
      <SectionHeading>Get In Touch</SectionHeading>
      <Grid
        css={{
          mx: '$auto',
          maxWidth: '$container-sm',
          gridTemplateColumns: '1fr',
          gridGap: '$10',
          '@bp1': { gridTemplateColumns: '1fr 1fr' },
        }}
      >
        <LetsChat />
        <Form />
      </Grid>
    </section>
  );
};

export default GetInTouch;
