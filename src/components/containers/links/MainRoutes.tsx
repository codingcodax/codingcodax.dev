import { mainRoutes } from '~/data/links';
import { Grid } from '~/components/ui';
import { FooterLinkItem as LinkItem } from '~/components/atoms';

const MainRoutes = () => {
  return (
    <Grid as='ul' css={{ gridRowGap: '$2' }}>
      {mainRoutes.map(({ name, href, isExternal }) => (
        <LinkItem
          key={name}
          href={href}
          isExternal={isExternal}
          type='footer-link'
        >
          {name}
        </LinkItem>
      ))}
    </Grid>
  );
};

export default MainRoutes;
