import { END_POINT } from '@/constants/api';
import { Id, ServerResponse } from '@/types/api';
import { axiosInstance } from './interceptor';

export const postLikeComment = async (talkPickId: Id, commentId: Id) => {
  const { data } = await axiosInstance.post<ServerResponse>(
    END_POINT.LIKE_COMMENT(talkPickId, commentId),
  );
  return data;
};

export const deleteLikeComment = async (talkPickId: Id, commentId: Id) => {
  const { data } = await axiosInstance.delete<ServerResponse>(
    END_POINT.DELETE_LIKE_COMMENT(talkPickId, commentId),
  );
  return data;
};
