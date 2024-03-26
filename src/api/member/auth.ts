import { END_POINT } from '@/constants/api';
import { MemberForm } from '@/types/member';
import { axiosInstance } from '../interceptor';

export const postLogin = async (
  form: Pick<MemberForm, 'email' | 'password'>,
) => {
  const { data } = await axiosInstance.post<string>(`${END_POINT.LOGIN}`, form);
  return data;
};

export const postLogout = async () => {
  const { data } = await axiosInstance.post<string>(`${END_POINT.LOGOUT}`);
  return data;
};

export const getRefreshToken = async () => {
  const { data } = await axiosInstance.get<string>(`${END_POINT.REFRESH}`);
  return data;
};
