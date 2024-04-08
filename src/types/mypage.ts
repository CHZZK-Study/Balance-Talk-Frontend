import { PaginationType } from './pagination';

interface MypageContentType {
  postId: number;
  postTitle: string;
}

export interface MyPostsContentType extends MypageContentType {
  postCreatedAt: string;
}

export interface MyCommentsPostsContentType extends MypageContentType {
  commentContent: string;
  commentCreatedAt: string;
}

export interface MyVotedPostsContentType extends MypageContentType {
  balanceOptionTitle: string;
  votedAt: string;
}

export interface MyBookmarksPostsContentType extends MypageContentType {
  bookmarkedAt: string;
}

export interface MyPostsType extends PaginationType {
  content: MyPostsContentType[];
}

export interface MyCommentsPostsType extends PaginationType {
  content: MyCommentsPostsContentType[];
}

export interface MyVotedPostsType extends PaginationType {
  content: MyVotedPostsContentType[];
}

export interface MyBookmarksPostsType extends PaginationType {
  content: MyBookmarksPostsContentType[];
}
