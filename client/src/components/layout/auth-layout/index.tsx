import { BaseLayout } from '../base-layout';
import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <BaseLayout className='bg-zinc-900'>
      <div className='grid h-full place-items-center pb-32'>
        <main className='h-96 w-80 rounded bg-zinc-950 p-10'>
          <Outlet />
        </main>
      </div>
    </BaseLayout>
  );
};
