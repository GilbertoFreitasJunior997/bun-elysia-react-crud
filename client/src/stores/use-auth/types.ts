import { AuthUser } from '@/lib/api/auth/schemas';

export type UseAuthParams = {
  user?: AuthUser;
};

export type UseAuthActions = {
  setUser(user?: AuthUser): void;
};

export type UseAuthStore = UseAuthParams & UseAuthActions;
