import { FC, ReactNode } from 'react';

import { styled } from '@/theme/theme.config';

import Link from '@/components/common/Link';

interface NavItemProps {
  href: string;
  children: ReactNode;
  onClick?: () => void;
}

const Li = styled('li');
const A = styled('a');

const NavItem: FC<NavItemProps> = ({ href, children, onClick }) => {
  return (
    <Li
      css={{ listStyleType: 'none', color: '$grayTextColor' }}
      onClick={onClick}
    >
      <Link href={href}>
        <A
          css={{
            textDecoration: 'none',
            position: 'relative',
            cursor: 'pointer',
            color: 'CurrentColor',

            '&::before': {
              content: '',
              height: '1px',
              w: '$full',
              position: 'absolute',
              top: '100%',
              left: '0px',
              bg: '$primary',
              clipPath:
                'polygon(0% 0%, 0% 100%, 0 100%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%, 100% 100%, 100% 0%)',
              transition:
                'clip-path 0.3s,transform 0.3s cubic-bezier(0.2, 1, 0.8, 1)',
              pointerEvents: 'none',
            },

            '& span': {
              display: 'inline-block',
              transition: 'transform 0.3s cubic-bezier(0.2, 1, 0.8, 1) 0s',
            },

            '&:hover': {
              '&::before': {
                clipPath:
                  'polygon(0% 0%, 0% 100%, 50% 100%, 50% 0, 50% 0, 50% 100%, 50% 100%, 0 100%, 100% 100%, 100% 0%)',
                transform: 'translate3d(0, 2px, 0) scale3d(1.08, 3, 1)',
              },

              '& span': {
                color: '$primary',
                transform: 'translate3d(0px, -2px, 0px)',
              },
            },
          }}
        >
          <span>{children}</span>
        </A>
      </Link>
    </Li>
  );
};

export default NavItem;
