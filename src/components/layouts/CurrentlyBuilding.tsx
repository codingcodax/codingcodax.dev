import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

import { inputVariants } from '~/animations/pages';
import { Center, Grid } from '~/components/ui';

const MotionCenter = motion(Center);

interface CurrentlyBuildingProps {
  children: ReactNode;
}

const CurrentlyBuilding: FC<CurrentlyBuildingProps> = ({ children }) => {
  return (
    <MotionCenter animate='show' initial='hidden' variants={inputVariants}>
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
