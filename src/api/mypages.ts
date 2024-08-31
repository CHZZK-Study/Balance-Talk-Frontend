import {
  Bookmark,
  GameBookmark,
  GameVote,
  GameWritten,
  MyComment,
  MyVote,
  MyWritten,
  SideBar,
} from '@/types/mypages';
import { END_POINT } from '@/constants/api';
import { axiosInstance } from './interceptor';

export const getMyWritten = async () => {
  const { data } = await axiosInstance.get<MyWritten>(
    END_POINT.MYPAGES_TALKS_WRITTEN(0, 6),
  );
  return data;
};

export const getMyVote = async () => {
  const { data } = await axiosInstance.get<MyVote>(
    END_POINT.MYPAGES_TALKS_VOTES(0, 6),
  );
  return data;
};

export const getMyComment = async () => {
  const { data } = await axiosInstance.get<MyComment>(
    END_POINT.MYPAGES_TALKS_COMMENTS(0, 6),
  );
  return data;
};

export const getMyBookmark = async () => {
  const { data } = await axiosInstance.get<Bookmark>(
    END_POINT.MYPAGES_TALKS_BOOKMARKS(0, 6),
  );
  return data;
};

export const getGameWritten = async () => {
  const { data } = await axiosInstance.get<GameWritten>(
    END_POINT.MYPAGES_GAMES_WRITTEN(0, 6),
  );
  return data;
};

export const getGameVote = async () => {
  const { data } = await axiosInstance.get<GameVote>(
    END_POINT.MYPAGES_GAMES_VOTES(0, 6),
  );
  return data;
};

export const getGameBookmark = async () => {
  const { data } = await axiosInstance.get<GameBookmark>(
    END_POINT.MYPAGES_GAMES_BOOKMARKS(0, 6),
  );
  return data;
};

export const getMyInfo = async (memberId: number): Promise<SideBar> => {
  try {
    // const response = await axiosInstance.get(`/members/${memberId}`);
    const response = await axiosInstance.get(`/members/${1}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch member info:', error);
    throw error;
  }
};
