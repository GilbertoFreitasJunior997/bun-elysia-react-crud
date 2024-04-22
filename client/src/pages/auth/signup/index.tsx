import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { FormInput } from '@/components/ui/form-input';
import { LOGIN_FULL_PATH } from '@/router/consts';
import { Link } from 'react-router-dom';
import { useForm } from '@/components/ui/form/use-form';
import { z } from 'zod';

const schema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
});

export const SignupPage = () => {
  const form = useForm({
    schema,
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  return (
    <>
      <h1 className='text-center'>Signup</h1>

      <Form form={form} className='flex size-full flex-col justify-between pt-3'>
        <div>
          <FormInput form={form} label='Name' name='name' required={true} />

          <FormInput form={form} label='Email' name='email' type='email' required={true} />

          <FormInput form={form} label='Password' name='password' type='password' required={true} />
        </div>

        <div className='flex w-full flex-col gap-1 pb-4'>
          <Button type='submit'> Signup </Button>

          <span className='text-center text-sm'>
            Already have an account? <Link to={LOGIN_FULL_PATH}>Login</Link>
          </span>
        </div>
      </Form>
    </>
  );
};
