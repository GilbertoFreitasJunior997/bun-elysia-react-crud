import { PAGES } from '@/pages/pages';
import { SidebarItem } from './sidebar-item';
import { cn } from '@/lib/utils';
import { useCallback } from 'react';
import { useSidebar } from '@/stores/use-sidebar';

export const Sidebar = () => {
  const isOpen = useSidebar(useCallback(s => s.isOpen, []));

  return (
    <aside
      className={cn(
        isOpen ? 'w-40' : 'w-[54px]',
        'overflow-hidden border-r border-r-zinc-200 p-2 transition-[width] ease-in-out',
      )}
      style={{
        gridArea: 'sidebar',
      }}>
      <nav>
        {PAGES.map(page => (
          <SidebarItem key={page.path} {...page} />
        ))}
      </nav>
    </aside>
  );
};
