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
  ALL_MEMBERS: '/members',
  MEMBER: (id: number) => `/members/${id}`,
  NICKNAME_VERIFY: '/members/duplicate',
  EMAIL_VERIFY: '/email/verify',
  EMAIL_REQUEST: '/email/request',
  POST: (id: number) => `/posts/${id}`,
  POST_BOOKMARK: (memberId: number) => `/bookmark/members/${memberId}`,
  COMMENTS: (postId: number) => `/posts/${postId}/comments`,
  CREATE_COMMENT: (postId: number) => `/posts/${postId}/comments`,
  VOTE_COUNT: (postId: number) => `/posts/${postId}/vote`,
  FILE_UPLOAD: '/files/image/upload',
  VOTE: (postId: number) => `posts/${postId}/vote`,
  ADD_BOOKMARK: (postId: number) => `bookmarks/${postId}`,
  DELETE_BOOKMARK: (postId: number) => `bookmarks/${postId}`,
  REPORT_POST: (postId: number) => `posts/${postId}/report`,
};

export const AXIOS = {
  TIMEOUT: 5000,
};
