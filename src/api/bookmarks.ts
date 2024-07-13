import { END_POINT } from '@/constants/api';
import { Id } from '@/types/api';
import { axiosInstance } from './interceptor';

export const postTalkPickBookmark = async (talkPickId: Id) => {
  const response = await axiosInstance.post(
    END_POINT.BOOKMARK_TALKPICK(talkPickId),
  );
  return response;
};

export const deleteTalkPickBookmark = async (talkPickId: Id) => {
  const response = await axiosInstance.delete(
    END_POINT.BOOKMARK_TALKPICK(talkPickId),
  );
  return response;
};

export const postGameBookmark = async (gameId: Id) => {
  const response = await axiosInstance.post(END_POINT.BOOKMARK_GAME(gameId));
  return response;
};

export const deleteGameBookmark = async (gameId: Id) => {
  const response = await axiosInstance.delete(END_POINT.BOOKMARK_GAME(gameId));
  return response;
};
