import { END_POINT } from '../../constants/api';
import {
  MyBookmarksPostsType,
  MyCommentsPostsType,
  MyPostsType,
  MyVotedPostsType,
} from '../../types/mypage';
import { axiosInstance } from '../interceptor';

export const getMyPosts = async (page: number) => {
  const { data } = await axiosInstance.get<MyPostsType>(
    `${END_POINT.MYPAGE_POSTS}`,
    {
      params: {
        page,
        size: 10,
      },
    },
  );
  return data;
};

export const getMyCommentsPosts = async (page: number) => {
  const { data } = await axiosInstance.get<MyCommentsPostsType>(
    `${END_POINT.MYPAGE_COMMENTS}`,
    {
      params: {
        page,
        size: 10,
      },
    },
  );
  return data;
};

export const getMyVotedPosts = async (page: number) => {
  const { data } = await axiosInstance.get<MyVotedPostsType>(
    `${END_POINT.MYPAGE_VOTEDPOSTS}`,
    {
      params: {
        page,
        size: 10,
      },
    },
  );
  return data;
};

export const getMyBookmarksPosts = async (page: number) => {
  const { data } = await axiosInstance.get<MyBookmarksPostsType>(
    `${END_POINT.MYPAGE_BOOKMARKS}`,
    {
      params: {
        page,
        size: 10,
      },
    },
  );
  return data;
};
