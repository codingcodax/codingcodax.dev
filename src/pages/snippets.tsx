import { CurrentlyBuilding } from '~/components/layouts';
import { Heading, Text } from '~/components/ui';
import { Seo } from '~/components/atoms';

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
