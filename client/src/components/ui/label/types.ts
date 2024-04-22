import * as LabelPrimitive from '@radix-ui/react-label';

import { ComponentPropsWithoutRef, ElementRef } from 'react';

import { VariantProps } from 'class-variance-authority';
import { labelVariants } from '../label/consts';

export type LabelProps = ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>;

export type LabelRef = ElementRef<typeof LabelPrimitive.Root>;
