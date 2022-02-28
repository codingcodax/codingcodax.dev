import { FC, ReactNode } from 'react';

import { Center, Grid } from '~/components/ui';

interface ItemProps {
  name: string;
  icon: ReactNode;
}

const Item: FC<ItemProps> = ({ icon, name }) => {
  return (
    <Grid
      as='li'
      css={{
        gridRowGap: '$3',
        justifyItems: 'center',
        textAlign: 'center',
      }}
    >
      <Center css={{ h: '$8', w: '$8' }}>{icon}</Center>
      {name}
    </Grid>
  );
};

export default Item;
