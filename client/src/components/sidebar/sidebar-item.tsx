import { Link, matchPath, useLocation } from 'react-router-dom';

import { SidebarItemProps } from './types';
import { cn } from '@/lib/utils';

export const SidebarItem = ({ icon: Icon, name, path }: SidebarItemProps) => {
  const location = useLocation();

  const isCurrentRoute = !!matchPath(location.pathname, `/${path}`);

  return (
    <Link
      to={path}
      className={cn(
        'flex w-full items-center gap-2 overflow-hidden rounded border border-transparent p-2 transition-colors',
        isCurrentRoute ? 'bg-zinc-50/10' : 'hover:bg-zinc-50/15',
      )}>
      <div className='flex size-5 min-w-5 items-center justify-center '>
        <Icon />
      </div>

      <div>{name}</div>
    </Link>
  );
};
