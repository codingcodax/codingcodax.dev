import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { CheckIcon, CloseIcon } from '~/components/icons';
import { Box, Button, Center, Grid, Input, Text } from '~/components/ui';

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const Form = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  // const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const [formState, setFormState] = useState({ state: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true);

    const options = {
      body: JSON.stringify(data),
      method: 'POST',
    };

    const res = await fetch('/api/contact/', options);

    const { success, message } = await res.json();

    if (!success) {
      setFormState({
        state: 'error',
        message,
      });
      setIsLoading(false);

      return;
    }

    setFormState({
      state: 'success',
      message,
    });

    setIsLoading(false);
  };

  return (
    <Grid
      as='form'
      css={{ gridRowGap: '$4' }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Grid css={{ gridRowGap: '$2' }}>
        <label htmlFor='name'>Name</label>
        <Input
          required
          autoComplete='name'
          id='name'
          placeholder='Jimmy'
          type='name'
          {...register('name')}
        />
      </Grid>
      <Grid css={{ gridRowGap: '$2' }}>
        <label htmlFor='email'>E-mail</label>
        <Input
          required
          autoComplete='email'
          id='email'
          placeholder='jimmy@choo.com'
          type='email'
          {...register('email')}
        />
      </Grid>
      <Grid css={{ gridRowGap: '$2' }}>
        <label htmlFor='message'>Message</label>
        <Input
          required
          as='textarea'
          id='message'
          placeholder='type your message...'
          {...register('message')}
          css={{
            h: '$32',
            maxHeight: '300px',
            minHeight: '$20',
            resize: 'vertical',
          }}
        />
      </Grid>

      <Button css={{ w: '$full' }} type='submit' variant='primary'>
        {!isLoading ? 'Send' : 'Sending...'}
      </Button>

      {formState.state === 'success' && (
        <Grid
          css={{
            mt: '$8',
            gridTemplateColumns: 'auto 1fr',
            gridColumnGap: '$4',
            border: '2px solid $success',
            borderRadius: '$sm',
          }}
          direction='column'
        >
          <Center css={{ bg: '$success' }}>
            <CheckIcon css={{ m: '$3', w: '$8' }} />
          </Center>
          <Box css={{ py: '$2', pr: '$2' }}>
            <Text css={{ fontWeight: '$bold' }}>Sucess!</Text>
            <Text>{formState.message}</Text>
          </Box>
        </Grid>
      )}
      {formState.state === 'error' && (
        <Grid
          css={{
            mt: '$8',
            gridTemplateColumns: 'auto 1fr',
            gridColumnGap: '$4',
            border: '2px solid $error',
            borderRadius: '$sm',
          }}
        >
          <Center css={{ bg: '$error' }}>
            <CloseIcon css={{ m: '$3', w: '$8' }} />
          </Center>
          <Box css={{ py: '$2', pr: '$2' }}>
            <Text css={{ fontWeight: '$bold' }} size='md'>
              Ooops!
            </Text>
            <Text>{formState.message}</Text>
          </Box>
        </Grid>
      )}
    </Grid>
  );
};

export default Form;
