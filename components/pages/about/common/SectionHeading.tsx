import { FC } from 'react';

import { Grid, Box, Heading } from '@/components/ui';

interface SectionHeadingProps {
  children: string;
}

const SectionHeading: FC<SectionHeadingProps> = ({ children }) => {
  return (
    <Grid
      direction='column'
      css={{
        mb: '$8',
        alignItems: 'center',
        gridTemplateColumns: '1fr auto 1fr',
        gridColumnGap: '$6',
      }}
    >
      <Box css={{ w: '$full', height: '1px', bg: '$normalBorder' }} />
      <Heading as='h2'>{children}</Heading>
      <Box css={{ w: '$full', height: '1px', bg: '$normalBorder' }} />
    </Grid>
  );
};

export default SectionHeading;
