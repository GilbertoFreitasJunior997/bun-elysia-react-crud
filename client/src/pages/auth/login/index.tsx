import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { FormInput } from '@/components/ui/form-input';
import { Link } from 'react-router-dom';
import { SIGNUP_FULL_PATH } from '@/router/consts';
import { useForm } from '@/components/ui/form/use-form';
import { z } from 'zod';

const schema = z.object({
  nameOrEmail: z.string(),
  password: z.string(),
});

export const LoginPage = () => {
  const form = useForm({
    schema,
    defaultValues: {
      nameOrEmail: '',
      password: '',
    },
  });

  return (
    <>
      <h1 className='text-center'>Login</h1>

      <Form form={form} className='flex size-full flex-col justify-between pt-3'>
        <div>
          <FormInput form={form} label='Name or Email' name='nameOrEmail' type='email' required={true} />

          <FormInput form={form} label='Password' name='password' type='password' required={true} />
        </div>

        <div className='flex w-full flex-col gap-1 pb-10'>
          <Button type='submit'> Login </Button>

          <span className='text-center text-sm'>
            Doesnt have an account? <Link to={SIGNUP_FULL_PATH}>Sign up</Link>
          </span>
        </div>
      </Form>
    </>
  );
};
