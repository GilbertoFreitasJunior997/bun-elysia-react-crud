import { FieldPath, FieldValues, UseFormReturn } from 'react-hook-form';

import { InputHTMLAttributes } from 'react';
import { UNSAFE_any } from '@/globals/types';

export type FormInputProps<TForm extends FieldValues = FieldValues> = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'form' | 'name'
> & {
  form: UseFormReturn<TForm, UNSAFE_any, UNSAFE_any>;
  name: FieldPath<TForm>;

  description?: string;
  label?: string;
};
