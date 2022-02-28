import { subRoutes } from '~/data/links';
import { Grid } from '~/components/ui';
import { FooterLinkItem as LinkItem } from '~/components/atoms';

const SubRoutes = () => {
  return (
    <Grid
      as='ul'
      css={{ textAlign: 'center', gridAutoRows: '21px', gridRowGap: '$2' }}
    >
      {subRoutes.map(({ name, href, isExternal }) => (
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

export default SubRoutes;
