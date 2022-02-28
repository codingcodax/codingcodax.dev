import { Heading, Text } from '~/components/ui';
import { Seo } from '~/components/atoms';
import { CurrentlyBuilding } from '~/components/layouts';

const Community = () => {
  return (
    <CurrentlyBuilding>
      <Seo name='Community 🌍' path='/community' />

      <Heading>Community 🌍</Heading>
      <Text>
        This page will contain information about inspirations behind the
        design/code solutions of this site, as well as contributors.
      </Text>
    </CurrentlyBuilding>
  );
};

export default Community;
