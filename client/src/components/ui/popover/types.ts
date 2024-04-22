import * as PopoverPrimitive from '@radix-ui/react-popover';

import { ComponentPropsWithoutRef, ElementRef, ReactNode } from 'react';

export type PopoverProps = ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> & {
  trigger: ReactNode;
};

export type PopoverRef = ElementRef<typeof PopoverPrimitive.Content> & {
  //
};
