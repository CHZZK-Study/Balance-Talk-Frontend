export type ItemPostsType = {
  id: number;
  title: string;
  date: string;
};

export interface ItemCommentsType extends ItemPostsType {
  comment: string;
}

export interface ItemVotedPostsType extends ItemPostsType {
  position: string;
}

export interface ItemBookmarksType extends ItemPostsType {}

export type Member = {
  nickname: string;
  profilePhoto: string;
  createdAt: string;
  postsCount: number;
  totalPostLike: number;
  level: number;
};
