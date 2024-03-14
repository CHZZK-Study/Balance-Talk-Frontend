import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { AXIOS, HTTP_STATUS_CODE } from '../constants/api';

export interface AxiosErrorProps {
  status?: number;
  message?: string;
}

export const axiosInstance = axios.create({
  // baseURL: process.env.API_URL,
  // baseURL: '/api',
  baseURL: process.env.MSW ? process.env.API_URL : '/api',
  withCredentials: true,
  timeout: AXIOS.TIMEOUT,
});

// request interceptor (before request)
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    console.log('요청 전 config');
    // TODO: access, refresh token handling (REST api header setting)
    return config;
  },
  (error) => {
    // request error handling
    console.log('요청 전 config 에러');

    return Promise.reject(error);
  },
);

// response interceptor (after request)
axiosInstance.interceptors.response.use(
  (response) => {
    console.log('요청 후 response');
    return response;
  },
  (error: AxiosError<AxiosErrorProps>) => {
    // response error handling
    console.log('요청 후 response 에러');
    if (
      error.response &&
      error.response.status === HTTP_STATUS_CODE.BAD_REQUEST
    ) {
      // TODO: delete token
      console.log('토큰 삭제 작업');
    }
    return Promise.reject(error);
  },
);
