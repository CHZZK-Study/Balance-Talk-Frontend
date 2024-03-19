import Comment from '@/assets/svg/Comment';
import { END_POINT } from '../../constants/api';
import { axiosInstance } from '../interceptor';

export const getComments = async (postId: number): Promise<Comment[]> =>
  axiosInstance.get(END_POINT.COMMENTS(postId));

export const addComment = async (
  postId: number,
  data: { content: string; selectedOptionId: number },
) => axiosInstance.post(END_POINT.VOTE(postId), { ...data });
