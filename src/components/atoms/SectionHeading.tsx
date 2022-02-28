import { FC } from 'react';

import { Box, Grid, Heading } from '~/components/ui';

interface SectionHeadingProps {
  children: string;
}

const SectionHeading: FC<SectionHeadingProps> = ({ children }) => {
  return (
    <Grid
      css={{
        mb: '$8',
        alignItems: 'center',
        gridTemplateColumns: '1fr auto  1fr',
        gridColumnGap: '$6',
      }}
      direction='column'
    >
      <Box css={{ w: '$full', height: '1px', bg: '$subtleBorder' }} />
      <Heading as='h2'>{children}</Heading>
      <Box css={{ w: '$full', height: '1px', bg: '$subtleBorder' }} />
    </Grid>
  );
};

export default SectionHeading;
