import { useMutation } from '@tanstack/react-query';

import { useAuthStore } from '@app/store';
import { API } from '@api/index';
import { setToken } from '@api/token';

export const useLoginMutation = () => {
  const login = useAuthStore((state) => state.login);

  const loginMutation = useMutation({
    mutationFn: API.auth.signIn,
    onSuccess: ({ data }) => {
      const { accessToken, userRole } = data;

      setToken(accessToken);
      login(userRole);
      // TODO: get user info
      //TODO: navigate
    },
  });

  return loginMutation;
};
