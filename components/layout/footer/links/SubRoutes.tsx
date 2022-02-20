import { Grid } from '@/components/ui';

import LinkItem from './LinkItem';

const SubRoutes = () => {
  return (
    <Grid
      as='ul'
      css={{ textAlign: 'center', gridAutoRows: '21px', gridRowGap: '$2' }}
    >
      <LinkItem href='/snippets'>Snippets</LinkItem>
      <LinkItem href='/community'>Community</LinkItem>
      <LinkItem href='/blog/uses'>Uses</LinkItem>
    </Grid>
  );
};

export default SubRoutes;
