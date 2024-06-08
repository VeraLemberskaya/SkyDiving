import axios, { AxiosError, AxiosRequestConfig } from 'axios';

import { env } from '@constants/env';

import { getToken, removeToken } from './token';

const api = axios.create({
  baseURL: env.API_URL,
});

api.defaults.headers.get['Accept'] = 'application/json';
api.defaults.headers.post['Accept'] = 'application/json';

api.interceptors.request.use((config) => {
  const token = getToken();

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

//TODO: error notification
api.interceptors.response.use(
  (config) => config,
  (error: AxiosError) => {
    const status = error.response?.status;

    if (status === 401) {
      removeToken();
    }

    return Promise.reject(error);
  },
);

export const request = async <T>({
  url,
  method,
  data,
  params,
  headers,
  responseType,
  paramsSerializer,
}: {
  url: string;
  method: AxiosRequestConfig['method'];
  data?: AxiosRequestConfig['data'];
  params?: AxiosRequestConfig['params'];
  headers?: AxiosRequestConfig['headers'];
  responseType?: AxiosRequestConfig['responseType'];
  paramsSerializer?: AxiosRequestConfig['paramsSerializer'];
}): Promise<T> => {
  try {
    const result = await api({
      url,
      method,
      data,
      params,
      headers,
      responseType,
      paramsSerializer,
    });

    return result.data;
  } catch (axiosError) {
    const err = axiosError as AxiosError;
    const error = {
      status: err.response?.status,
      data: err.response?.data || err.message,
    };

    throw error;
  }
};
