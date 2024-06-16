import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { notification } from 'antd';

import { env } from '@constants/env';

import { getToken, removeToken } from './token';
import { ResponseData } from './types/common';

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

api.interceptors.response.use(
  (config) => config,
  (error: AxiosError<ResponseData>) => {
    const status = error.response?.status;
    const errorMessage = error.response?.data?.detail;

    if (status === 401) {
      removeToken();
    }

    notification.error({
      message: 'Ошибка!',
      description: errorMessage,
    });

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
