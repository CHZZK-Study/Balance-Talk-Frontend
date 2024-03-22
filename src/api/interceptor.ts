import store from '@/store';
import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { AXIOS, END_POINT } from '../constants/api';
import { HTTPError } from './HttpError';

export interface AxiosErrorResponse {
  status: number;
  httpStatus?: string;
  message?: string;
}

export const axiosInstance = axios.create({
<<<<<<< HEAD
  // baseURL: process.env.API_URL,
  // baseURL: '/api',
  baseURL: process.env.MSW ? process.env.API_URL : '/api',
=======
  baseURL: process.env.MSW ? process.env.API_URL : '/api',
  headers: {
    'Content-Type': 'application/json',
  },
>>>>>>> 6f83a3bf22fa562988cc87acbcd680ac320b203b
  withCredentials: true,
  timeout: AXIOS.TIMEOUT,
});

// request interceptor (before request)
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (config.headers.Authorization) return config;

    const { accessToken } = store.getState().token;
    const newConfig = { ...config };

    if (newConfig.url === END_POINT.FILE_UPLOAD) {
      newConfig.headers['Content-Type'] = 'multipart/form-data';
    }
    if (accessToken) {
      newConfig.headers.Authorization = `Bearer ${accessToken}`;
    }

    console.log('요청 전 config', newConfig);
    return newConfig;
  },
  (error: AxiosError<AxiosErrorResponse>) => {
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
  (error: AxiosError<AxiosErrorResponse>) => {
    console.log('요청 후 response 에러');
    if (!error.response) throw error;
    const { data, status } = error.response;
    // if (status === HTTP_STATUS_CODE.BAD_REQUEST) {
    //   // TODO: delete token
    //   console.log('토큰 삭제 작업');
    // }
    throw new HTTPError(status, data.httpStatus, data.message);
  },
);
