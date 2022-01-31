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
          gridTemplateColumns: 'repeat(2, minmax(300px, 1fr))',
          gridColumnGap: '$10',
        }}
      >
        <LetsChat />
        <Form />
      </Grid>
    </section>
  );
};

export default GetInTouch;
