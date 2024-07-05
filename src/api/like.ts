import { END_POINT } from '@/constants/api';
import { Id, ServerResponse } from '@/types/api';
import { axiosInstance } from './interceptor';

export const postLikeComment = async (commentId: Id) => {
  const { data } = await axiosInstance.post<ServerResponse>(
    END_POINT.LIKE_COMMENT(commentId),
  );
  return data;
};

export const deleteLikeComment = async (commentId: Id) => {
  const { data } = await axiosInstance.delete<ServerResponse>(
    END_POINT.DELETE_LIKE_COMMENT(commentId),
  );
  return data;
};
