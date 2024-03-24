// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';
import { mockComments } from '../data/comments';

const URL = process.env.API_URL;

const getComments = rest.get(
  `${URL}/posts/:postId/comments`,
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        content: mockComments,
        pageable: {
          pageNumber: 0,
          pageSize: 10,
          sort: {
            empty: false,
            unsorted: true,
            sorted: false,
          },
          offset: 0,
          paged: true,
          unpaged: false,
        },
        last: true,
        totalPages: 1,
        totalElements: 10,
        size: 10,
        number: 10,
        sort: {
          empty: false,
          unsorted: true,
          sorted: false,
        },
        numberOfElements: 10,
        empty: false,
      }),
    );
  },
);

const createComment = rest.post(
  `${URL}/posts/:postId/comments`,
  (req, res, ctx) => {
    return res(ctx.status(201));
  },
);

const addLikeComment = rest.post(
  `${URL}/posts/:postId/comments/:commentId/likes`,
  (req, res, ctx) => {
    return res(ctx.status(200));
  },
);

const deleteLikeComment = rest.delete(
  `${URL}/posts/:postId/comments/:commentId/likes`,
  (req, res, ctx) => {
    return res(ctx.status(204));
  },
);

const reportComment = rest.post(
  `${URL}/posts/:postId/comments/:commentId/report`,
  (req, res, ctx) => {
    return res(ctx.status(200));
  },
);

const editComment = rest.put(
  `${URL}/posts/:postId/comments/:commentId`,
  (req, res, ctx) => {
    return res(ctx.status(200));
  },
);

export default [
  getComments,
  createComment,
  addLikeComment,
  deleteLikeComment,
  reportComment,
  editComment,
];
