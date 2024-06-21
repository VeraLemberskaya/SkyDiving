import { useMutation, useQuery } from '@tanstack/react-query';

import { generateCredentials, getUserInfo, signIn } from './auth.api';

export const useLoginMutation = () => {
  return useMutation({ mutationFn: signIn });
};

export const useGenerateCredentialsMutation = () => {
  return useMutation({ mutationFn: generateCredentials });
};

export const useUserInfoQuery = ({ enabled }: { enabled: boolean }) => {
  return useQuery({
    queryFn: getUserInfo,
    queryKey: ['user'],
    staleTime: Infinity,
    enabled,
  });
};
