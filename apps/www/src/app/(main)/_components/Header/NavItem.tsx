'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx/lite';

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
      className={clsx('group relative overflow-hidden', className)}
      variant={isActive ? 'solid' : 'ghost'}
    >
      <Link href={href}>
        <span className='invisible'>{children}</span>
        <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 ease-in-out hover:duration-300 group-hover:-translate-y-[200%]'>
          {children}
        </span>
        <span className='absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-[200%] transition-transform duration-500 ease-in-out hover:duration-300 group-hover:-translate-y-1/2'>
          {children}
        </span>
      </Link>
    </Button>
  );
};
