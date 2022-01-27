import { FC, ReactNode } from 'react';

import { Center, Grid } from '../ui';

interface CurrentlyBuildingProps {
  children: ReactNode;
}

const CurrentlyBuilding: FC<CurrentlyBuildingProps> = ({ children }) => {
  return (
    <Center>
      <Grid
        css={{
          p: '$8',
          h: '$min',
          maxWidth: '550px',
          gridRowGap: '$8',
          border: '2px solid $normalBorder',
          borderRadius: '$sm',
        }}
      >
        {children}
      </Grid>
    </Center>
  );
};

export default CurrentlyBuilding;
