import { Grid } from '@/components/ui';

import SocialLinks from '@/data/socials';

import LinkItem from './LinkItem';

const Socials = () => {
  return (
    <Grid as='ul' css={{ textAlign: 'right', gridRowGap: '$2' }}>
      {SocialLinks.map(({ name, href }) => (
        <LinkItem key={name} href={href}>
          {name}
        </LinkItem>
      ))}
    </Grid>
  );
};

export default Socials;
