import { NextPage } from 'next';

import { Grid } from '@/components/ui';

const Custom404: NextPage = () => {
  return (
    <Grid direction='column'>
      <div>
        <h3>Oops!</h3>
        <h1>We couldn{"'"}t find that page</h1>
        <h2>Maybe you can find what you need here?</h2>
      </div>
      <div></div>
    </Grid>
  );
};

export default Custom404;
