import { END_POINT } from '@/constants/api';
import { AxiosError } from 'axios';
import { axiosInstance } from '../interceptor';

export const postEmailVerify = async () => {
  const { data } = await axiosInstance.post<string>(
    `${END_POINT.EMAIL_VERIFY}`,
  );
  return data;
};

export const postEmailRequest = async (email: string) => {
  const { data } = await axiosInstance.post<string | AxiosError>(
    `${END_POINT.EMAIL_REQUEST}`,
    email,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  return data;
};
