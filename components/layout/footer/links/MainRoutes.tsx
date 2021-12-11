import { Grid } from '@/components/ui';

import LinkItem from './LinkItem';

const MainRoutes = () => {
  return (
    <Grid as='ul' css={{ gridRowGap: '$2' }}>
      <LinkItem href='/'>Home</LinkItem>
      <LinkItem href='/about'>About</LinkItem>
      <LinkItem href='/projects'>Projects</LinkItem>
      <LinkItem href='/blog'>Blog</LinkItem>
    </Grid>
  );
};

export default MainRoutes;
