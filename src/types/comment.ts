import { PaginationType } from './pagination';

export interface Comment {
  id: number;
  talkPickId: number;
  talkPickTitle: string;
  nickname: string;
  content: string;
  option: 'A' | 'B';
  likesCount: number;
  myLike: boolean;
  parentId: number;
  replyCount: number;
  reportedCount: number;
  createdAt: string;
  lastModifiedAt: string;
  blind: boolean;
  best: boolean;
  imgUrl: string;
}

export interface Reply {
  id: number;
  talkPickId: number;
  ninckname: string;
  content: string;
  option: string;
  likesCount: number;
  myLike: boolean;
  createdAt: string;
  lastModifiedAt: string;
  parentCommentId: number;
  isBest: boolean;
}

export interface CommentsPagination extends PaginationType {
  content: Comment[];
}

export type CreateCommentProps = Pick<Comment, 'content' | 'option'>;

export type EditCommentProps = Pick<Comment, 'content'>;

export type CreateReplyProps = Pick<Comment, 'content' | 'option'>;

export type CommentsCategory = 'comments' | 'bestComments';
