import { Grid } from '@/components/ui';

import { mainRoutes } from '@/data/links';

import LinkItem from './LinkItem';

const MainRoutes = () => {
  return (
    <Grid as='ul' css={{ gridRowGap: '$2' }}>
      {mainRoutes.map(({ name, href, isExternal }) => (
        <LinkItem key={name} href={href} isExternal={isExternal}>
          {name}
        </LinkItem>
      ))}
    </Grid>
  );
};

export default MainRoutes;
