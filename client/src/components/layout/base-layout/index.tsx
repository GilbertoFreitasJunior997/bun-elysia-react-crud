import { BaseLayoutProps } from './types';
import { cn } from '@/lib/utils';

export const BaseLayout = ({ children, className, ...props }: BaseLayoutProps) => {
  return (
    <div className={cn('h-dvh w-dvw overflow-hidden bg-zinc-950 text-zinc-100', className)} {...props}>
      {children}
    </div>
  );
};
