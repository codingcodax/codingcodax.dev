import { FC, ReactNode } from 'react';
import NextLink from 'next/link';

interface LinkProps {
  href: string;
  children: ReactNode;
}

const Link: FC<LinkProps> = ({ href, children }) => {
  return (
    <NextLink href={href} passHref>
      {children}
    </NextLink>
  );
};

export default Link;
