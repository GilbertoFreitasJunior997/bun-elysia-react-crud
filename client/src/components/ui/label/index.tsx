import * as LabelPrimitive from '@radix-ui/react-label';

import { LabelProps, LabelRef } from './types';

import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

export const Label = forwardRef<LabelRef, LabelProps>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      'text-[13px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      className,
    )}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;
