import { FC, ReactNode } from 'react';

import { Box, Button, Grid, Input, Text } from '../ui';

interface SubscribeProps {
  children?: ReactNode;
}

const Subscribe: FC<SubscribeProps> = ({ children }) => {
  return (
    <Box
      as='form'
      css={{
        p: '$8',
        bg: '$shadowColor',
        border: '2px dashed $dividerColor',
        borderRadius: '$sm',
      }}
    >
      <Text
        as='label'
        htmlFor='email-label'
        css={{ mb: '$2', color: '$grayTextColor', display: 'inline-block' }}
      >
        Your Email Address
      </Text>

      <Grid direction='column' css={{ gridTemplateColumns: '1fr auto' }}>
        <Input
          id='email-label'
          type='email'
          placeholder='jimmy@choo.com'
          autoComplete='email'
          required
          css={{
            borderTopRightRadius: '0',
            borderBottomRightRadius: '0',
            borderRightWidth: '0',
          }}
        />
        <Button
          variant='primary'
          css={{ borderTopLeftRadius: '0', borderBottomLeftRadius: '0' }}
        >
          Subscribe
        </Button>
      </Grid>
    </Box>
  );
};

export default Subscribe;
