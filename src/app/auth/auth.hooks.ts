import { useCallback, useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';

import { removeToken, setToken } from '@api/token';
import { API } from '@api/index';
import { Credentials } from '@api/types';

import { useAuthStore } from './auth.store';

export const useLogout = () => {
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = useCallback(() => {
    removeToken();
    logout();
  }, [logout]);

  return { logout: handleLogout };
};

export const useLogin = () => {
  const queryClient = useQueryClient();
  const login = useAuthStore((state) => state.login);
  const { mutate, isPending } = API.auth.useLoginMutation();

  const handleLogin = useCallback(
    (data: Credentials) => {
      mutate(data, {
        onSuccess: ({ accessToken }) => {
          queryClient.invalidateQueries({ queryKey: ['user'] });
          setToken(accessToken);
          login();
        },
      });
    },
    [login, mutate, queryClient],
  );

  return {
    login: handleLogin,
    isPending,
  };
};

export const useCurrentUser = () => {
  const isLogin = useAuthStore((state) => state.isLogin);
  const setRole = useAuthStore((state) => state.setRole);
  const { logout } = useLogout();

  const userInfoQuery = API.auth.useUserInfoQuery({ enabled: isLogin });
  const { data, isError, isSuccess } = userInfoQuery;

  useEffect(() => {
    if (isSuccess) {
      setRole(data.role);
    }
  }, [data?.role, isSuccess, setRole]);

  useEffect(() => {
    if (isError) {
      logout();
    }
  }, [isError, logout]);

  return userInfoQuery;
};
