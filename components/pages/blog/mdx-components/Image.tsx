import { FC, ReactNode } from 'react';
import NextImage from 'next/image';

import { Box, Text } from '@/components/ui';

interface ImageProps {
  children: ReactNode;
  props: any;
}

const Image: FC<ImageProps> = ({ children, ...props }) => (
  <Box as='figure' css={{ my: '$8', maxWidth: '$container-md' }}>
    <Box css={{ '& img': { borderRadius: '$sm', overflow: 'hidden' } }}>
      <NextImage {...(props as any)} />
    </Box>
    {children && (
      <Text
        as='figcaption'
        css={{
          mt: '$2',
          fontStyle: 'italic',
          textAlign: 'center',

          '&>p': {
            color: '$lowTextColor',
            fontSize: '$sm',
          },

          '&>p>code': { py: '2px' },
        }}
      >
        {children}
      </Text>
    )}
  </Box>
);

export default Image;
