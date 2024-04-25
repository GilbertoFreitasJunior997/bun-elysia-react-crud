import { UseAuthStore } from './types';
import { create } from 'zustand';

export const useAuth = create<UseAuthStore>()(set => ({
  user: undefined,
  setUser: user => set({ user }),
}));
