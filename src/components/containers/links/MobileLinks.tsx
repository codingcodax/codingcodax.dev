import socials from '~/data/socials';
import { Grid } from '~/components/ui';
import { FooterLinkItem as LinkItem } from '~/components/atoms';

const MobileLinks = () => {
  return (
    <Grid
      as='ul'
      css={{
        gridColumnGap: '$8',
        justifyContent: 'center',
        listStyleType: 'none',
      }}
      direction='column'
    >
      {socials.map(({ name, href, icon }) => (
        <LinkItem key={name} isExternal href={href} type='mobile-link'>
          {icon}
        </LinkItem>
      ))}
    </Grid>
  );
};

export default MobileLinks;
