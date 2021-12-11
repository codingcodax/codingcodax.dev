import { Grid } from '@/components/ui';

import MainRoutes from './MainRoutes';
import SubRoutes from './SubRoutes';
import Socials from './Socials';

const index = () => {
  return (
    <Grid
      direction='column'
      css={{ mx: '$auto', w: '$full', maxWidth: '800px' }}
    >
      <MainRoutes />
      <SubRoutes />
      <Socials />
    </Grid>
  );
};

export default index;
