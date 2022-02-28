import { FC } from 'react';
import { ReadTimeResults } from 'reading-time';

import { CalendarIcon, ClockIcon } from '~/components/icons';
import { Center, Grid, Text } from '~/components/ui';

interface DetailsProps {
  readingTime: ReadTimeResults | undefined;
  publishedAtFormatted: string | undefined;
}

const Details: FC<DetailsProps> = ({ readingTime, publishedAtFormatted }) => {
  return (
    <Grid
      css={{
        mb: '$4',
        alignSelf: 'end',
        justifyContent: 'start',
        gridColumnGap: '$4',
        color: '$lowTextColor',
      }}
      direction='column'
    >
      <Center>
        <CalendarIcon css={{ width: '$5', mr: '$1' }} />
        <Text as='span' css={{ color: '$lowTextColor' }} size='sm'>
          {publishedAtFormatted}
        </Text>
      </Center>

      <Center>
        <ClockIcon css={{ w: '$5', mr: '$1' }} />
        <Text as='span' css={{ color: '$lowTextColor' }} size='sm'>
          {readingTime?.text}
        </Text>
      </Center>
    </Grid>
  );
};

export default Details;
