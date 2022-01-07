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
        gridRowGap: '$2',
        justifyItems: 'center',
        textAlign: 'center',
      }}
    >
      <Center css={{ h: '$12', w: '$12' }}>{icon}</Center>
      {name}
    </Grid>
  );
};

export default Item;
