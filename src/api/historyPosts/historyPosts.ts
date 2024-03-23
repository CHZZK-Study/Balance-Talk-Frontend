import { END_POINT } from '../../constants/api';
import { MyBookmarksPostsType } from '../../types/history';
import { axiosInstance } from '../interceptor';

export const getMyBookmarksPosts = async () => {
  const { data } = await axiosInstance.get<MyBookmarksPostsType[]>(
    `${END_POINT.GET_BOOKMARK}`,
  );
  return data;
};
