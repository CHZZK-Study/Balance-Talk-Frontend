import { END_POINT } from '@/constants/api';
import { VoteOption, VoteResult } from '@/types/vote';
import { Id } from '@/types/api';
import { axiosInstance } from './interceptor';

export const getTalkPickVoteResult = async (talkPickId: Id) => {
  const { data } = await axiosInstance.get<VoteResult>(
    END_POINT.VOTE_TALK(talkPickId),
  );
  return data;
};

export const putTalkPickVoteResult = async (
  talkPickId: Id,
  option: VoteOption,
) => {
  const response = await axiosInstance.put(END_POINT.VOTE_TALK(talkPickId), {
    voteOption: option,
  });
  return response;
};

export const postTalkPickVoteResult = async (
  talkPickId: Id,
  option: VoteOption,
) => {
  const response = await axiosInstance.post(END_POINT.VOTE_TALK(talkPickId), {
    voteOption: option,
  });
  return response;
};

export const getGameVoteResult = async (gameId: Id) => {
  const { data } = await axiosInstance.get<VoteResult>(
    END_POINT.VOTE_GAME(gameId),
  );
  return data;
};

export const putGameVoteResult = async (gameId: Id, option: VoteOption) => {
  const response = await axiosInstance.put(END_POINT.VOTE_GAME(gameId), {
    voteOption: option,
  });
  return response;
};

export const postGameVoteResult = async (gameId: Id, option: VoteOption) => {
  const response = await axiosInstance.post(END_POINT.VOTE_GAME(gameId), {
    voteOption: option,
  });
  return response;
};
