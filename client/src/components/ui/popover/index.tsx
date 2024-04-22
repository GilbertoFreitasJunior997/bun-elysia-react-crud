import * as PopoverPrimitive from '@radix-ui/react-popover';

import { PopoverProps, PopoverRef } from './types';

import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

export const Popover = forwardRef<PopoverRef, PopoverProps>(
  ({ className, align = 'center', sideOffset = 4, children, trigger, ...props }, ref) => (
    <PopoverPrimitive.Root>
      <PopoverPrimitive.Trigger asChild>{trigger}</PopoverPrimitive.Trigger>

      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          ref={ref}
          align={align}
          sideOffset={sideOffset}
          className={cn(
            'z-50 w-auto min-w-20 rounded-md border border-zinc-200/50 bg-popover p-3 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
            className,
          )}
          {...props}>
          {children}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  ),
);
Popover.displayName = PopoverPrimitive.Popover.displayName;
