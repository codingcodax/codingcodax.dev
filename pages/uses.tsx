import { Heading, Text } from '@/components/ui';

import Seo from '@/components/common/Seo';
import CurrentlyBuilding from '@/components/common/CurrentlyBuilding';

const Uses = () => {
  return (
    <CurrentlyBuilding>
      <Seo name='Uses 🔌' path='/uses' />

      <Heading>Uses 🔌</Heading>
      <Text>
        This page will contain information about what software and hardware I
        currently use day-to-day.
      </Text>
    </CurrentlyBuilding>
  );
};

export default Uses;
