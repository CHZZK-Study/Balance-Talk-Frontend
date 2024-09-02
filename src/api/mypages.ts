import {
  GameBookmark,
  GameVote,
  GameWritten,
  MyBookmark,
  MyComment,
  MyVote,
  MyWritten,
  SideBar,
} from '@/types/mypages';
import { END_POINT } from '@/constants/api';
import { axiosInstance } from './interceptor';

export const getMyWritten = async (page: number, size: number) => {
  const { data } = await axiosInstance.get<MyWritten>(
    END_POINT.MYPAGES_TALKS_WRITTEN(page, size),
  );
  return data;
};

export const getMyVote = async (page: number, size: number) => {
  const { data } = await axiosInstance.get<MyVote>(
    END_POINT.MYPAGES_TALKS_VOTES(page, size),
  );
  return data;
};

export const getMyComment = async (page: number, size: number) => {
  const { data } = await axiosInstance.get<MyComment>(
    END_POINT.MYPAGES_TALKS_COMMENTS(page, size),
  );
  return data;
};

export const getMyBookmark = async (page: number, size: number) => {
  const { data } = await axiosInstance.get<MyBookmark>(
    END_POINT.MYPAGES_TALKS_BOOKMARKS(page, size),
  );
  return data;
};

export const getGameWritten = async (page: number, size: number) => {
  const { data } = await axiosInstance.get<GameWritten>(
    END_POINT.MYPAGES_GAMES_WRITTEN(page, size),
  );
  return data;
};

export const getGameVote = async (page: number, size: number) => {
  const { data } = await axiosInstance.get<GameVote>(
    END_POINT.MYPAGES_GAMES_VOTES(page, size),
  );
  return data;
};

export const getGameBookmark = async (page: number, size: number) => {
  const { data } = await axiosInstance.get<GameBookmark>(
    END_POINT.MYPAGES_GAMES_BOOKMARKS(page, size),
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
