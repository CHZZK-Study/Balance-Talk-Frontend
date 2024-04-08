import { END_POINT } from '@/constants/api';
import { MemberForm } from '@/types/member';
import { axiosInstance } from '../interceptor';

export const postEmailVerify = async (
  value: Pick<MemberForm, 'email' | 'verificationCode'>,
) => {
  const { data } = await axiosInstance.post<string>(
    `${END_POINT.EMAIL_VERIFY}`,
    value,
  );

  return data;
};

export const postEmailRequest = async (email: string) => {
  const { data } = await axiosInstance.post<string>(
    `${END_POINT.EMAIL_REQUEST}`,
    email,
  );
  return data;
};

export const getFindPw = async (email: string) => {
  const { data } = await axiosInstance.post<string>(
    `${END_POINT.FIND_PW}`,
    email,
  );
  return data;
};
