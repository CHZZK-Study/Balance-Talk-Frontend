import { CommentsPagination, CreatedComment } from '@/types/comment';
import { END_POINT } from '../../constants/api';
import { axiosInstance } from '../interceptor';

export const getComments = async (
  postId: number,
): Promise<CommentsPagination> => axiosInstance.get(END_POINT.COMMENTS(postId));

export const createComment = async (postId: number, data: CreatedComment) =>
  axiosInstance.post(END_POINT.CREATE_COMMENT(postId), { ...data });
