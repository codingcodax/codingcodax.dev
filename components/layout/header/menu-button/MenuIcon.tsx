import { Box } from '@/components/ui';
import { FC } from 'react';

const MenuIcon: FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <Box css={{ h: '$full', w: '$full', position: 'relative' }}>
      <Box
        as='span'
        css={{
          height: '4px',
          width: isOpen ? '32px' : '40px',
          position: 'absolute',
          bg: '$headingColor',
          borderRadius: '1px',
          transition: 'all 0.3s ease-in-out',

          top: isOpen ? '22px' : '16px',
          left: isOpen ? '8px' : '4px',
          transform: isOpen ? 'rotate(45deg)' : 'none',
        }}
      />

      <Box
        as='span'
        css={{
          height: '4px',
          width: isOpen ? '32px' : '16px',
          position: 'absolute',
          bg: '$headingColor',
          borderRadius: '1px',
          transition: 'all 0.3s ease-in-out',

          right: isOpen ? '8px' : '4px',
          bottom: isOpen ? '22px' : '16px',
          transform: isOpen ? 'rotate(-45deg)' : 'none',
        }}
      />
    </Box>
  );
};

export default MenuIcon;
