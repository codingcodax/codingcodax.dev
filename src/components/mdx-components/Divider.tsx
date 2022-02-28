import { Grid } from '~/components/ui';

const Divider = () => (
  <Grid
    css={{
      my: '$8',
      mx: '$auto',
      w: '$full',
      maxWidth: '$container-sm',
      justifyContent: 'center',
      gridColumnGap: '$4',
    }}
    direction='column'
  >
    <Grid
      css={{ w: '$8', h: '$1', borderRadius: '$sm', bg: '$subtleBorder' }}
    />
    <Grid
      css={{ w: '$8', h: '$1', borderRadius: '$sm', bg: '$subtleBorder' }}
    />
    <Grid
      css={{ w: '$8', h: '$1', borderRadius: '$sm', bg: '$subtleBorder' }}
    />
  </Grid>
);

export default Divider;
