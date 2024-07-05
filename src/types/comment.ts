import { PaginationType } from './pagination';

export interface Comment {
  id: number;
  talkPickId: number;
  talkPickTitle: string;
  ninckname: string;
  content: string;
  option: string;
  likesCount: number;
  myLike: boolean;
  replyCount: number;
  createdAt: string;
  lastModifiedAt: string;
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
