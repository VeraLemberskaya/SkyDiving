import { request } from '@api/client';

import { Credentials, SignInResponse } from './types';

const AUTH_URL = '/auth';

const SIGN_IN_URL = `${AUTH_URL}/sign-in`;
const GENERATE_CREDENTIALS_URL = (id: number) => `${AUTH_URL}/regen/${id}`;

const signIn = (data: Credentials) => {
  return request<SignInResponse>({ url: SIGN_IN_URL, method: 'post', data });
};

const generateCredentials = (id: number) => {
  return request<Credentials>({
    url: GENERATE_CREDENTIALS_URL(id),
    method: 'post',
  });
};

export const auth = {
  signIn,
  generateCredentials,
};
