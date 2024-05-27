import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { useAuthStore } from '@app/store';
import { API } from '@api/index';
import { setToken } from '@api/token';
import { routes } from '@constants/routes';

export const useLoginMutation = () => {
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: API.auth.signIn,
    onSuccess: ({ data }) => {
      const { accessToken, userRole } = data;

      setToken(accessToken);
      login(userRole);
      // TODO: get user info
      navigate(routes.HOME);
    },
  });

  return loginMutation;
};
