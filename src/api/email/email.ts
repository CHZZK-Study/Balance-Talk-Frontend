import { END_POINT } from '@/constants/api';
import { MemberForm } from '@/types/member';
import { AxiosError } from 'axios';
import { axiosInstance } from '../interceptor';

export const postEmailVerify = async (
  value: Pick<MemberForm, 'email' | 'code'>,
) => {
  const { data } = await axiosInstance.post<string | AxiosError<'response'>>(
    `${END_POINT.EMAIL_VERIFY}`,
    value,
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
