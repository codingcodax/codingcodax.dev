import socials from '~/data/socials';
import { Grid } from '~/components/ui';
import { FooterLinkItem as LinkItem } from '~/components/atoms';

const Socials = () => {
  return (
    <Grid as='ul' css={{ textAlign: 'right', gridRowGap: '$2' }}>
      {socials.map(({ name, href }) => (
        <LinkItem key={name} isExternal href={href} type='footer-link'>
          {name}
        </LinkItem>
      ))}
    </Grid>
  );
};

export default Socials;
