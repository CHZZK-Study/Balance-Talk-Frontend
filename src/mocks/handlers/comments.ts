// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';
import { COMMENTS_PER_PAGE } from '@/constants/pagination';
import { mockComments, mockReplies } from '../data/comments';

const URL = process.env.API_URL;

const getComments = rest.get(
  `${URL}/posts/:postId/comments`,
  (req, res, ctx) => {
    const pageNumber: number = Number(
      req.url.searchParams.get('pageable[page]'),
    );

    return res(
      ctx.status(200),
      ctx.json({
        content: mockComments.slice(
          pageNumber * COMMENTS_PER_PAGE,
          (pageNumber + 1) * COMMENTS_PER_PAGE,
        ),
        pageable: {
          pageNumber,
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
        last: mockComments.length / 10 - 1 === pageNumber,
        totalPages: mockComments.length / 10,
        totalElements: mockComments.length,
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

const deleteComment = rest.delete(
  `${URL}/posts/:postId/comments/:commentId`,
  (req, res, ctx) => {
    return res(ctx.status(204));
  },
);

const getReplies = rest.get(
  `${URL}/posts/:postId/comments/:commentId/replies`,
  (req, res, ctx) => {
    const { pathname } = req.url;
    return res(
      ctx.status(200),
      ctx.json({
        content: mockReplies(Number(pathname.split('/')[4])),
      }),
    );
  },
);

const createReply = rest.post(
  `${URL}/posts/:postId/comments/:commentId/replies`,
  (req, res, ctx) => {
    return res(ctx.status(201));
  },
);

export default [
  getComments,
  createComment,
  addLikeComment,
  deleteLikeComment,
  reportComment,
  editComment,
  deleteComment,
  getReplies,
  createReply,
];
