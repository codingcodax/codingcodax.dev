'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@acme/ui/Button';

type Props = {
  className?: string;
  href: string;
  children: React.ReactNode;
};

export const NavItem = ({ className, href, children }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Button
      asChild
      className={className}
      variant={isActive ? 'solid' : 'ghost'}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};
