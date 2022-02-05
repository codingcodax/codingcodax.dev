import { Heading, Text } from '@/components/ui';

import Seo from '@/components/common/Seo';
import CurrentlyBuilding from '@/components/common/CurrentlyBuilding';

const Snippets = () => {
  return (
    <CurrentlyBuilding>
      <Seo name='Snippets 🤖' path='/snippets' />

      <Heading>Snippets 🤖</Heading>
      <Text>
        This page will contain code snippets I&apos;ve used in the past and
        saved.
      </Text>
    </CurrentlyBuilding>
  );
};

export default Snippets;
