import { END_POINT } from '@/constants/api';
import { SelectedVoteInfo } from '@/types/vote';
import { axiosInstance } from './interceptor';

export const voteBalanceOption = async (
  postId: number,
  data: SelectedVoteInfo,
) => axiosInstance.post(END_POINT.VOTE(postId), { ...data });

export const changeBalanceOption = async (
  postId: number,
  data: SelectedVoteInfo,
) => axiosInstance.put(END_POINT.VOTE(postId), { ...data });
