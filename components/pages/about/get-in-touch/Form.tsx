import { Grid, Input } from '@/components/ui';

const Form = () => {
  return (
    <Grid as='form' css={{ gridRowGap: '$4' }}>
      <Grid css={{ gridRowGap: '$2' }}>
        <label htmlFor='name'>Name</label>
        <Input
          id='name'
          type='name'
          autoComplete='name'
          placeholder='Jimmy'
          required
        />
      </Grid>
      <Grid css={{ gridRowGap: '$2' }}>
        <label htmlFor='email'>E-mail</label>
        <Input
          id='email'
          type='email'
          autoComplete='email'
          placeholder='jimmy@choo.com'
          required
        />
      </Grid>
      <Grid css={{ gridRowGap: '$2' }}>
        <label htmlFor='message'>Message</label>
        <Input
          as='textarea'
          id='message'
          placeholder='type your message...'
          required
          css={{ h: '$32', minHeight: '$16', resize: 'vertical' }}
        />
      </Grid>
    </Grid>
  );
};

export default Form;
