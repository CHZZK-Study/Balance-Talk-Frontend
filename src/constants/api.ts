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
  POST: (id: number) => `/posts/${id}`,
  MYPAGE_POSTS: '/myPage/history/posts',
  MYPAGE_COMMENTS: '/myPage/history/comments',
  MYPAGE_VOTEDPOSTS: '/myPage/history/votedPosts',
  MYPAGE_BOOKMARKS: '/myPage/history/bookmarks',
  COMMENTS: (postId: number) => `/posts/${postId}/comments`,
  CREATE_COMMENT: (postId: number) => `/posts/${postId}/comments`,
  VOTE_COUNT: (postId: number) => `/posts/${postId}/vote`,
  FILE_UPLOAD: '/files/image/upload',
  VOTE: (postId: number) => `posts/${postId}/vote`,
  ADD_BOOKMARK: (postId: number) => `bookmarks/${postId}`,
  DELETE_BOOKMARK: (postId: number) => `bookmarks/${postId}`,
  REPORT_POST: (postId: number) => `posts/${postId}/report`,
  ADD_LIKE_COMMENT: (postId: number, commentId: number) =>
    `posts/${postId}/comments/${commentId}/likes`,
  DELETE_LIKE_COMMENT: (postId: number, commentId: number) =>
    `posts/${postId}/comments/${commentId}/likes`,
  REPORT_COMMENT: (postId: number, commentId: number) =>
    `posts/${postId}/comments/${commentId}/report`,
  REFRESH: '/members/reissue',
  EDIT_COMMENT: (postId: number, commentId: number) =>
    `posts/${postId}/comments/${commentId}`,
  DELETE_COMMENT: (postId: number, commentId: number) =>
    `posts/${postId}/comments/${commentId}`,
  COMMENT_REPLILES: (postId: number, commentId: number) =>
    `posts/${postId}/comments/${commentId}/replies`,
  CREATE_REPLY: (postId: number, commentId: number) =>
    `posts/${postId}/comments/${commentId}/replies`,
  GAME_LIST: '/games',
  CREATE_GAME: '/games',
  TODAY_GAME: 'games/today',
  NEW_GAME: '/games/new',
  BEST_GAME: '/games/best',
  GAME: (postId: Id) => `/games/${postId}`,
  EDIT_GAME: (postId: Id) => `/games/${postId}`,
  DELETE_GAME: (postId: Id) => `/games/${postId}`,
};

export const AXIOS = {
  TIMEOUT: 5000,
};
