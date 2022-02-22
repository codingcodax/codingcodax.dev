import { Grid } from '@/components/ui';
import { subRoutes } from '@/data/links';

import LinkItem from './LinkItem';

const SubRoutes = () => {
  return (
    <Grid
      as='ul'
      css={{ textAlign: 'center', gridAutoRows: '21px', gridRowGap: '$2' }}
    >
      {subRoutes.map(({ name, href, isExternal }) => (
        <LinkItem key={name} href={href} isExternal={isExternal}>
          {name}
        </LinkItem>
      ))}
    </Grid>
  );
};

export default SubRoutes;
