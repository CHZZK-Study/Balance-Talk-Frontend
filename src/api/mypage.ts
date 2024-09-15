import { axiosInstance } from './interceptor';

export const fetchMyVotes = async (page: number = 0, size: number = 6) => {
  const response = await axiosInstance.get('/my/talks/votes', {
    params: { page, size },
  });
  return response.data;
};

export const fetchMyComments = async (page: number = 0, size: number = 6) => {
  const response = await axiosInstance.get('/my/talks/comments', {
    params: { page, size },
  });
  return response.data;
};

export const fetchMyTalks = async (page: number = 0, size: number = 6) => {
  const response = await axiosInstance.get('/my/talks/my', {
    params: { page, size },
  });
  return response.data;
};

export const fetchBookmarks = async (page: number = 0, size: number = 6) => {
  const response = await axiosInstance.get('/my/talks/bookmarks', {
    params: { page, size },
  });
  return response.data;
};

export const fetchGameBookmarks = async (
  page: number = 0,
  size: number = 6,
) => {
  const response = await axiosInstance.get('/my/games/bookmarks', {
    params: { page, size },
  });
  return response.data;
};

export const fetchGameVotes = async (page: number = 0, size: number = 6) => {
  const response = await axiosInstance.get('/my/games/votes', {
    params: { page, size },
  });
  return response.data;
};

export const fetchGameMy = async (page: number = 0, size: number = 6) => {
  const response = await axiosInstance.get('/my/games/my', {
    params: { page, size },
  });
  return response.data;
};
