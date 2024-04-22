import * as LabelPrimitive from '@radix-ui/react-label';

import {
  ComponentPropsWithoutRef,
  ElementRef,
  FormEvent,
  HTMLAttributes,
  createContext,
  forwardRef,
  useId,
} from 'react';
import { Controller, ControllerProps, FieldPath, FieldValues, FormProvider } from 'react-hook-form';
import { FormFieldContextValue, FormItemContextValue, FormProps } from './types';

import { Label } from '@/components/ui/label';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
import { useFormField } from './use-form-field';

export const Form = <TForm extends FieldValues = FieldValues>({
  form,
  children,
  onSubmit: preOnSubmit,
  ...props
}: FormProps<TForm>) => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    preOnSubmit?.(e);
  };

  return (
    <FormProvider {...form}>
      <form {...props} onSubmit={onSubmit}>
        {children}
      </form>
    </FormProvider>
  );
};

export const FormFieldContext = createContext<FormFieldContextValue>({} as FormFieldContextValue);
export const FormItemContext = createContext<FormItemContextValue>({} as FormItemContextValue);

export const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

export const FormItem = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  const id = useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn('space-y-1', className)} {...props} />
    </FormItemContext.Provider>
  );
});
FormItem.displayName = 'FormItem';

export const FormLabel = forwardRef<
  ElementRef<typeof LabelPrimitive.Root>,
  ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return <Label ref={ref} className={cn(error && 'text-destructive', className)} htmlFor={formItemId} {...props} />;
});
FormLabel.displayName = 'FormLabel';

export const FormControl = forwardRef<ElementRef<typeof Slot>, ComponentPropsWithoutRef<typeof Slot>>(
  ({ ...props }, ref) => {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

    return (
      <Slot
        ref={ref}
        id={formItemId}
        aria-describedby={!error ? formDescriptionId : `${formDescriptionId} ${formMessageId}`}
        aria-invalid={!!error}
        {...props}
      />
    );
  },
);
FormControl.displayName = 'FormControl';

export const FormDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    const { formDescriptionId } = useFormField();

    return <p ref={ref} id={formDescriptionId} className={cn('text-sm text-muted-foreground', className)} {...props} />;
  },
);
FormDescription.displayName = 'FormDescription';

export const FormMessage = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error.message) : children;

    if (!body) {
      return null;
    }

    return (
      <p ref={ref} id={formMessageId} className={cn('text-sm font-medium text-destructive', className)} {...props}>
        {body}
      </p>
    );
  },
);
FormMessage.displayName = 'FormMessage';
