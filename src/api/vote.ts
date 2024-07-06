import { END_POINT } from '@/constants/api';
import { VoteOption, VoteResult } from '@/types/vote';
import { axiosInstance } from './interceptor';

export const getTalkPickVoteResult = async (talkPickId: number) => {
  const { data } = await axiosInstance.get<VoteResult>(
    END_POINT.VOTE_TALK(talkPickId),
  );
  return data;
};

export const putTalkPickVoteResult = async (
  talkPickId: number,
  option: VoteOption,
) => {
  const response = await axiosInstance.put(END_POINT.VOTE_TALK(talkPickId), {
    voteOption: option,
  });
  return response;
};

export const postTalkPickVoteResult = async (
  talkPickId: number,
  option: VoteOption,
) => {
  const response = await axiosInstance.post(END_POINT.VOTE_TALK(talkPickId), {
    voteOption: option,
  });
  return response;
};

export const getGameVoteResult = async (gameId: number) => {
  const { data } = await axiosInstance.get<VoteResult>(
    END_POINT.VOTE_GAME(gameId),
  );
  return data;
};

export const putGameVoteResult = async (gameId: number, option: VoteOption) => {
  const response = await axiosInstance.put(END_POINT.VOTE_GAME(gameId), {
    voteOption: option,
  });
  return response;
};

export const postGameVoteResult = async (
  gameId: number,
  option: VoteOption,
) => {
  const response = await axiosInstance.post(END_POINT.VOTE_GAME(gameId), {
    voteOption: option,
  });
  return response;
};
