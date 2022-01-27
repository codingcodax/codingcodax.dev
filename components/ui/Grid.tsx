import { styled } from '@/theme/config/';

const Grid = styled('div', {
  display: 'grid',

  variants: {
    direction: {
      row: { gridAutoFlow: 'row' },
      column: { gridAutoFlow: 'column' },
    },
  },
});

Grid.displayName = 'Grid';

export default Grid;
