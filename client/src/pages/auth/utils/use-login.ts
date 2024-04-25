import { useCallback, useState } from 'react';

import { AuthUser } from '@/lib/api/auth/schemas';
import { PAGES } from '@/pages/pages';
import { useAuth } from '@/stores/use-auth';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const setUser = useAuth(useCallback(s => s.setUser, []));
  const navigate = useNavigate();

  const handleLogin = async (submit: Promise<AuthUser>) => {
    try {
      setIsLoading(true);
      const response = await submit;

      const nextPagePath = PAGES.find(page => page.default)?.path ?? PAGES[0]?.path;

      if (nextPagePath) {
        setUser(response);
        navigate(`/${nextPagePath}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    handleLogin,
  };
};
