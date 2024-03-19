// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';
import { mockComments } from '../data/comments';

const URL = process.env.API_URL;

const getComments = rest.get(
  `${URL}/posts/:postId/comments`,
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ totalVoteCount: 40, mockComments }));
  },
);

export default [getComments];
