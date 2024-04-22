import { ButtonProps, ButtonRef } from './types';

import { Slot } from '@radix-ui/react-slot';
import { buttonVariants } from './consts';
import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

export const Button = forwardRef<ButtonRef, ButtonProps>(
  ({ className, variant, size, asChild = false, children, type = 'button', ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp type={type} className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {children}
      </Comp>
    );
  },
);
Button.displayName = 'Button';
