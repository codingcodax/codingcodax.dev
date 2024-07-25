import { forwardRef } from 'react';
import { Content } from '@radix-ui/react-tooltip';

import { cn } from '../';

type Ref = React.ElementRef<typeof Content>;
type Props = React.ComponentPropsWithoutRef<typeof Content>;

export const TooltipContent = forwardRef<Ref, Props>(
  ({ className, sideOffset = 4, ...props }, ref) => (
    <Content
      ref={ref}
      className={cn(
        'z-50 overflow-hidden rounded-lg border border-grey-line bg-grey-base px-3 py-1.5 text-sm shadow-md animate-in fade-in-0 zoom-in-95',
        'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
        'data-[side=bottom]:slide-in-from-top-2',
        'data-[side=left]:slide-in-from-right-2',
        'data-[side=right]:slide-in-from-left-2',
        'data-[side=top]:slide-in-from-bottom-2',
        className,
      )}
      sideOffset={sideOffset}
      {...props}
    />
  ),
);

TooltipContent.displayName = Content.displayName;
