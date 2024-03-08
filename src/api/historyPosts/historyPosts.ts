import { END_POINT } from '../../constants/api';
import { MyBookmarksPostsType } from '../../types/history';
import { axiosInstance } from '../interceptor';

const URL = process.env.API_URL;

export const getMyBookmarksPosts = async (memberId: number) => {
  const { data } = await axiosInstance.get<MyBookmarksPostsType[]>(
    `${URL}${END_POINT.POST_BOOKMARK(memberId)}`,
  );
  return data;
};
