export type MyPostsType = {
  id: number;
  title: string;
  date: string;
};

export interface MyCommentsPostsType extends MyPostsType {
  comment: string;
}

export interface MyVotedPostsType extends MyPostsType {
  position: string;
}

export interface MyBookmarksPostsType extends MyPostsType {}

export type Member = {
  nickname: string;
  profilePhoto: string;
  createdAt: string;
  postsCount: number;
  totalPostLike: number;
  level: number;
};
