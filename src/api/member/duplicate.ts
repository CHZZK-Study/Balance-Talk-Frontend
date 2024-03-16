import { END_POINT } from '@/constants/api';
import { AxiosErrorResponse, axiosInstance } from '../interceptor';

export const getNicknameVerify = async (nickname: string) => {
  const { data } = await axiosInstance.get<string | AxiosErrorResponse>(
    `${END_POINT.NICKNAME_VERIFY}`,
    {
      params: {
        nickname,
      },
    },
  );
  return data;
};
