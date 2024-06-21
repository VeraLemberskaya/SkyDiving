import { request } from '@api/client';

import { Credentials, SignInResponse, UserInfo } from './types';

const AUTH_URL = '/auth';

const SIGN_IN_URL = `${AUTH_URL}/sign-in`;
const USER_INFO_URL = `${AUTH_URL}/user-info`;
const GENERATE_CREDENTIALS_URL = (id: number) => `${AUTH_URL}/regen/${id}`;

export const getUserInfo = () => {
  return request<UserInfo>({
    url: USER_INFO_URL,
    method: 'get',
  });
};

export const signIn = (data: Credentials) => {
  return request<SignInResponse>({ url: SIGN_IN_URL, method: 'post', data });
};

export const generateCredentials = (id: number) => {
  return request<Credentials>({
    url: GENERATE_CREDENTIALS_URL(id),
    method: 'post',
  });
};
