import { END_POINT } from '../../constants/api';
import { MyBookmarksPostsType } from '../../types/history';
import { axiosInstance } from '../interceptor';

<<<<<<< HEAD
const URL = process.env.API_URL;

export const getMyBookmarksPosts = async (memberId: number) => {
  const { data } = await axiosInstance.get<MyBookmarksPostsType[]>(
    `${URL}${END_POINT.POST_BOOKMARK(memberId)}`,
=======
export const getMyBookmarksPosts = async () => {
  const { data } = await axiosInstance.get<MyBookmarksPostsType[]>(
    `${END_POINT.GET_BOOKMARK}`,
>>>>>>> dev
  );
  return data;
};
