import { AnyZodObject, z } from 'zod';
import { DefaultValues, useForm as useFormBase } from 'react-hook-form';

import { UseFormParams } from './types';
import { zodResolver } from '@hookform/resolvers/zod';

export const useForm = <TSchema extends AnyZodObject = AnyZodObject, TData extends object = z.infer<TSchema>>({
  schema,
  defaultValues,
  params,
}: UseFormParams<TSchema, TData>) => {
  return useFormBase<TData>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<TData>,
    ...params,
  });
};
