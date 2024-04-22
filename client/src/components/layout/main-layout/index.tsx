import { BaseLayout } from '../base-layout';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '@/components/sidebar';
import { Suspense } from 'react';
import { Topbar } from '@/components/topbar';

export const MainLayout = () => {
  return (
    <BaseLayout
      className='grid'
      style={{
        gridTemplateRows: 'auto 1fr',
        gridTemplateColumns: 'auto 1fr',
        gridTemplateAreas: '"topbar topbar" "sidebar main"',
      }}>
      <Topbar />
      <Sidebar />

      <div
        className='h-full bg-zinc-900 p-2'
        style={{
          gridArea: 'main',
        }}>
        <main className='h-full rounded bg-zinc-950 p-4'>
          <Suspense fallback={<></>}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </BaseLayout>
  );
};
