import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { FormInput } from '@/components/ui/form-input';
import { Link } from 'react-router-dom';
import { SIGNUP_FULL_PATH } from '@/router/consts';
import { authLoginParamsSchema } from '@/lib/api/auth/schemas';
import { authService } from '@/lib/api/auth';
import { useForm } from '@/components/ui/form/use-form';
import { useLogin } from '../utils/use-login';
import { z } from 'zod';

const formDataSchema = authLoginParamsSchema;

type FormData = z.infer<typeof formDataSchema>;

export const LoginPage = () => {
  const form = useForm({
    schema: formDataSchema,
    defaultValues: {
      nameOrEmail: '',
      password: '',
    },
  });
  const { isLoading, handleLogin } = useLogin();
  const handleSubmit = async (data: FormData) => {
    await handleLogin(authService.login(data));
  };

  return (
    <>
      <h1 className='text-center'>Login</h1>

      <Form form={form} onSubmit={handleSubmit} className='flex size-full flex-col justify-between pt-3'>
        <div>
          <FormInput form={form} label='Name or Email' name='nameOrEmail' type='email' required={true} />

          <FormInput form={form} label='Password' name='password' type='password' required={true} />
        </div>

        <div className='flex w-full flex-col gap-1 pb-10'>
          <Button type='submit' disabled={isLoading}>
            Login
          </Button>

          <span className='text-center text-sm'>
            Doesnt have an account? <Link to={SIGNUP_FULL_PATH}>Sign up</Link>
          </span>
        </div>
      </Form>
    </>
  );
};
