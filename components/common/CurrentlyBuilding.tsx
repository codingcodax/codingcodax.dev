import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

import { Center, Grid } from '../ui';
import { inputVariants } from 'animations/pages';

const MotionCenter = motion(Center);

interface CurrentlyBuildingProps {
  children: ReactNode;
}

const CurrentlyBuilding: FC<CurrentlyBuildingProps> = ({ children }) => {
  return (
    <MotionCenter variants={inputVariants} initial='hidden' animate='show'>
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
    </MotionCenter>
  );
};

export default CurrentlyBuilding;
