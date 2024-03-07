import {
  MyBookmarksPostsType,
  MyCommentsPostsType,
  MyPostsType,
  MyVotedPostsType,
} from '../../types/history';

export const mockMyPosts: MyPostsType[] = [
  {
    id: 1,
    title: '게시글 제목입니다.',
    date: '2024.02.23',
  },
  {
    id: 2,
    title: '게시글 제목입니다.',
    date: '2024.02.23',
  },
  {
    id: 3,
    title: '게시글 제목입니다.',
    date: '2024.02.23',
  },
  {
    id: 4,
    title: '게시글 제목입니다.',
    date: '2024.02.23',
  },
  {
    id: 5,
    title: '게시글 제목입니다.',
    date: '2024.02.23',
  },
  {
    id: 6,
    title: '게시글 제목입니다.',
    date: '2024.02.23',
  },
  {
    id: 7,
    title: '게시글 제목입니다.',
    date: '2024.02.23',
  },
  {
    id: 8,
    title: '게시글 제목입니다.',
    date: '2024.02.23',
  },
  {
    id: 9,
    title: '게시글 제목입니다.',
    date: '2024.02.23',
  },
  {
    id: 10,
    title: '게시글 제목입니다.',
    date: '2024.02.23',
  },
];

export const mockMyCommentPosts: MyCommentsPostsType[] = [
  {
    id: 1,
    title: '게시글 제목입니다.',
    comment: '댓글 내용입니다.',
    date: '2024.02.23',
  },
  {
    id: 2,
    title: '게시글 제목입니다.',
    comment: '댓글 내용입니다.',
    date: '2024.02.23',
  },
  {
    id: 3,
    title: '게시글 제목입니다.',
    comment: '댓글 내용입니다.',
    date: '2024.02.23',
  },
];

export const mockMyVotedPosts: MyVotedPostsType[] = [
  {
    id: 1,
    title: '게시글 제목입니다.',
    date: '2024.02.23',
    position: '투표 진영: 찬성',
  },
];

export const mockMyBookmarksPosts: MyBookmarksPostsType[] = [
  {
    id: 1,
    title: '북마크한 게시글 제목입니다.',
    date: '~ 2024.02.23',
  },
  {
    id: 2,
    title: '북마크한 게시글 제목입니다.',
    date: '~ 2024.02.23',
  },
];
