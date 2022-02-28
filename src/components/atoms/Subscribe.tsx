import { FC, ReactNode } from 'react';

import { Box, Button, Grid, Input, Text } from '~/components/ui';

interface SubscribeProps {
  children?: ReactNode;
}

const Subscribe: FC<SubscribeProps> = ({ children }) => {
  return (
    <Box
      as='form'
      css={{
        p: '$8',
        bg: '$subtleBackground',
        border: '2px dashed $normalBorder',
        borderRadius: '$sm',
      }}
    >
      <Text
        as='label'
        css={{ mb: '$2', color: '$lowTextColor', display: 'inline-block' }}
        htmlFor='email-label'
      >
        Your Email Address
      </Text>

      <Grid css={{ gridTemplateColumns: '1fr auto' }} direction='column'>
        <Input
          required
          autoComplete='email'
          css={{
            borderTopRightRadius: '0',
            borderBottomRightRadius: '0',
            borderRightWidth: '0',
          }}
          id='email-label'
          placeholder='jimmy@choo.com'
          type='email'
        />
        <Button
          css={{ borderTopLeftRadius: '0', borderBottomLeftRadius: '0' }}
          variant='primary'
        >
          Subscribe
        </Button>
      </Grid>
    </Box>
  );
};

export default Subscribe;
