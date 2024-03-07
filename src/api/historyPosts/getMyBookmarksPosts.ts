import { END_POINT } from '../../constants/api';
import { ItemBookmarksType } from '../../types/history';
import { axiosInstance } from '../interceptor';

export const getMyBookmarksPosts = async (memberId: number) => {
  const { data } = await axiosInstance.get<ItemBookmarksType>(
    END_POINT.POST_BOOKMARK(memberId),
  );
  return data;
};
