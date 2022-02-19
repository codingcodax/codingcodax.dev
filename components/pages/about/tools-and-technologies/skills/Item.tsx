import { Center, Grid } from '@/components/ui';
import { FC, ReactNode } from 'react';

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
