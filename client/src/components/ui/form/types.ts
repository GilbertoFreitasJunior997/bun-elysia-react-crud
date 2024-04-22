import { AnyZodObject, z } from 'zod';
import { FieldPath, FieldValues, UseFormProps, UseFormReturn } from 'react-hook-form';
import { HTMLAttributes, PropsWithChildren } from 'react';

import { UNSAFE_any } from '@/globals/types';

export type FormProps<TForm extends FieldValues = FieldValues> = PropsWithChildren &
  HTMLAttributes<HTMLFormElement> & {
    form: UseFormReturn<TForm, UNSAFE_any, UNSAFE_any>;
  };

export type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

export type FormItemContextValue = {
  id: string;
};

export type UseFormParams<TSchema extends AnyZodObject = AnyZodObject, TData extends object = z.infer<TSchema>> = {
  schema: TSchema;
  defaultValues: TData;

  params?: Omit<UseFormProps<TData>, 'defaultValues' | 'resolver'>;
};
