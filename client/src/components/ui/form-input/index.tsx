import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../form';

import { FieldValues } from 'react-hook-form';
import { FormInputProps } from './types';
import { Input } from '../input';

export const FormInput = <TForm extends FieldValues = FieldValues>({
  form,
  name,
  label,
  description,
  ...props
}: FormInputProps<TForm>) => {
  const { control } = form;

  return (
    <FormField<TForm>
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {!!label && <FormLabel>{label}</FormLabel>}

          <FormControl>
            <Input {...props} {...field} />
          </FormControl>

          {!!description && <FormDescription>{description}</FormDescription>}

          <FormMessage />
        </FormItem>
      )}
    />
  );
};
FormInput.displayName = 'Input';
