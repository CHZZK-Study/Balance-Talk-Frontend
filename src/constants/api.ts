export const HTTP_STATUS_CODE = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  PRECONDITION_FAILED: 412,
} as const;

export const END_POINT = {
  SIGN_UP: '/members/join',
  LOGIN: '/members/login',
  GET_ALL_MEMBERS: '/members',
  GET_MEMBER: (id: number) => `/members/${id}`,
  GET_POST: (id: number) => `/posts/${id}`,
  COMMENTS: (postId: number) => `/posts/${postId}/comments`,
};

export const AXIOS = {
  TIMEOUT: 5000,
};
