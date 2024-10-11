import { PaginationType } from './pagination';

export interface Comment {
  id: number;
  talkPickId: number;
  talkPickTitle: string;
  nickname: string;
  profileImage: string;
  content: string;
  option: 'A' | 'B' | null;
  likesCount: number;
  myLike: boolean;
  parentId: number | null;
  replyCount: number;
  reportedCount: number;
  createdAt: string;
  lastModifiedAt: string;
  edited: boolean;
  blind: boolean;
  best: boolean;
}

export interface CommentsPagination extends PaginationType {
  content: Comment[];
}

export type CommentProps = Pick<Comment, 'content'>;

export type CommentsCategory = 'comments' | 'bestComments';
