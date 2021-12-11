import { Grid } from '@/components/ui';

import LinkItem from '../LinkItem';

const Socials = () => {
  return (
    <Grid as='ul' css={{ textAlign: 'right', gridRowGap: '$2' }}>
      <LinkItem href='/github'>GitHub</LinkItem>
      <LinkItem href='/github'>Twitter</LinkItem>
      <LinkItem href='/github'>LinkedIn</LinkItem>
    </Grid>
  );
};

export default Socials;
