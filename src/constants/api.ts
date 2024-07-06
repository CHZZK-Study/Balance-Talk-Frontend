import { Id } from '@/types/api';

export const HTTP_STATUS_CODE = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  INTERNAL_SERVER_ERROR: 500,
} as const;

export const END_POINT = {
  SIGN_UP: '/members/join',
  LOGIN: '/members/login',
  LOGOUT: '/members/logout',
  REFRESH: '/members/reissue',
  ALL_MEMBERS: '/members',
  MEMBER: (id: number) => `/members/${id}`,
  MEMBER_PROFILE: (id: number) => `/members/${id}/profile`,
  MEMBER_IMAGE: '/members/image',
  MEMBER_NICKNAME: '/members/nickname',
  MEMBER_PASSWORD: '/members/password',
  NICKNAME_VERIFY: '/members/duplicate',
  EMAIL_VERIFY: '/email/verify',
  EMAIL_REQUEST: '/email/request',
  FIND_PW: '/email/password',
  MYPAGE_POSTS: '/myPage/history/posts',
  MYPAGE_COMMENTS: '/myPage/history/comments',
  MYPAGE_VOTEDPOSTS: '/myPage/history/votedPosts',
  MYPAGE_BOOKMARKS: '/myPage/history/bookmarks',
  FILE_UPLOAD: '/files/image/upload',
  POST: (id: number) => `/posts/${id}`,
  REPORT_POST: (postId: number) => `posts/${postId}/report`,
  VOTE_TALK: (talkPickId: number) => `/votes/talks/${talkPickId}`,
  VOTE_GAME: (gameId: number) => `/votes/games/${gameId}`,
  COMMENTS: (talkPickId: Id) => `/talks/${talkPickId}/comments`,
  BEST_COMMENT: (talkPickId: Id) => `talks/${talkPickId}/comments/best`,
  CREATE_COMMENT: (talkPickId: Id) => `/talks/${talkPickId}/comments`,
  EDIT_COMMENT: (talkPickId: Id, commentId: Id) =>
    `talks/${talkPickId}/comments/${commentId}`,
  DELETE_COMMENT: (talkPickId: Id, commentId: Id) =>
    `talks/${talkPickId}/comments/${commentId}`,
  LIKE_COMMENT: (commentId: Id) => `talks/${commentId}/likes`,
  DELETE_LIKE_COMMENT: (commentId: Id) => `talks/${commentId}/likes`,
  CREATE_REPLY: (commentId: Id) => `talks/comments/${commentId}/replies`,
  BOOKMARK: (gameId: Id) => `bookmarks/games/${gameId}`,
  DELETE_BOOKMARK: (gameId: Id) => `bookmarks/games/${gameId}`,
  CREATE_GAME: '/games',
  NEW_GAME: '/games/new',
  BEST_GAME: '/games/best',
  GAME: (gameId: Id) => `/games/${gameId}`,
  EDIT_GAME: (gameId: Id) => `/games/${gameId}`,
  DELETE_GAME: (gameId: Id) => `/games/${gameId}`,
};

export const AXIOS = {
  TIMEOUT: 5000,
};
