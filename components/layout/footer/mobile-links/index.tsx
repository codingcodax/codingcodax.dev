import { Grid } from '@/components/ui';

import SocialLinks from '@/data/socials';

import LinkItem from './LinkItem';

const MobileLinks = () => {
  return (
    <Grid
      as='ul'
      direction='column'
      css={{
        gridColumnGap: '$8',
        justifyContent: 'center',
        listStyleType: 'none',
      }}
    >
      {SocialLinks.map(({ name, href, icon }) => (
        <LinkItem key={name} href={href}>
          {icon}
        </LinkItem>
      ))}
    </Grid>
  );
};

export default MobileLinks;
