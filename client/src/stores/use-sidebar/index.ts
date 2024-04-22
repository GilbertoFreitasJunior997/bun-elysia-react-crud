import { UseSidebarStore } from './types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useSidebar = create<UseSidebarStore>()(
  persist(
    set => ({
      isOpen: true,
      setIsOpen: isOpen => set({ isOpen }),
    }),
    {
      name: 'sidebar-store',
    },
  ),
);
