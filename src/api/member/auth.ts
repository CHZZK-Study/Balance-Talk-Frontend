import { END_POINT } from '@/constants/api';
import { MemberForm } from '@/types/member';
import { axiosInstance } from '../interceptor';

export interface LoginResponseData {
  accessToken: string;
  refreshToken: string;
}

export const postLogin = async (
  form: Pick<MemberForm, 'email' | 'password'>,
) => {
  const { data } = await axiosInstance.post<LoginResponseData>(
    `${END_POINT.LOGIN}`,
    form,
  );
  return data;
};

export const postLogout = async () => {
  const { data } = await axiosInstance.post<string>(`${END_POINT.LOGOUT}`);
  return data;
};
