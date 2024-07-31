import type { LinkProps as NextLinkProps } from 'next/link';
import { forwardRef } from 'react';
import NextLink from 'next/link';

import { cn } from '@acme/ui';

type AnchorProps = React.ComponentPropsWithoutRef<'a'>;

export type Props = {
  /** Indicates if the link is external */
  isExternal?: boolean;
  href: string;
  children: React.ReactNode;
  className?: string;
} & (NextLinkProps | AnchorProps);

/**
 * Displays a link that can be either a Next.js Link or a regular anchor tag.
 * @param {boolean} [external=false] - Indicates if the link is external.
 */
export const Link = forwardRef<HTMLAnchorElement, Props>(
  ({ isExternal = false, children, className, href, ...props }, ref) => {
    const Comp = isExternal ? NextLink : 'a';

    const linkProps = isExternal
      ? { target: '_blank', rel: 'noopener noreferrer', href }
      : { href };

    return (
      <span className='inline-flex overflow-hidden'>
        <Comp
          ref={ref}
          className={cn(
            'group relative outline-none focus-visible:ring-2 focus-visible:ring-grey-text-contrast focus-visible:ring-offset-1',
            className,
          )}
          {...linkProps}
          {...props}
        >
          <span className='invisible'>{children}</span>
          <span className='absolute left-0 top-0 transition-transform duration-500 ease-in-out group-hover:-translate-y-[120%] group-hover:duration-300'>
            {children}
          </span>
          <span className='absolute left-0 top-0 translate-y-[150%] decoration-grey-text-contrast decoration-dashed decoration-1 underline-offset-2 transition-transform duration-500 ease-in-out group-hover:-translate-y-0 group-hover:underline group-hover:duration-300'>
            {children}
          </span>
        </Comp>
      </span>
    );
  },
);

Link.displayName = 'CustomLink';
