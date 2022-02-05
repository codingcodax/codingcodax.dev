import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Box, Button, Center, Grid, Input, Text } from '@/components/ui';
import { CheckIcon, CloseIcon } from '@/components/icons';

// import { useForm } from '@/hooks/useForm';

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
          id='name'
          type='name'
          autoComplete='name'
          placeholder='Jimmy'
          required
          {...register('name')}
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
          {...register('email')}
        />
      </Grid>
      <Grid css={{ gridRowGap: '$2' }}>
        <label htmlFor='message'>Message</label>
        <Input
          as='textarea'
          id='message'
          placeholder='type your message...'
          required
          {...register('message')}
          css={{ h: '$32', minHeight: '$16', resize: 'vertical' }}
        />
      </Grid>

      <Button variant='primary' css={{ w: '$full' }} type='submit'>
        {!isLoading ? 'Send' : 'Sending...'}
      </Button>

      {formState.state === 'success' && (
        <Grid
          direction='column'
          css={{
            mt: '$8',
            gridTemplateColumns: 'auto 1fr',
            gridColumnGap: '$4',
            border: '2px solid $success',
            borderRadius: '$sm',
          }}
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
            <Text size='md' css={{ fontWeight: '$bold' }}>
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
