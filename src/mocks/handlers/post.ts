// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';
import { postList, voteInfo } from '../data/posts';

const URL = 'http://localhost:3000';

const postHandlers = [
  rest.get(`${URL}/posts`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(postList));
  }),

  rest.get(`${URL}/post/:postId/vote`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(voteInfo));
  }),
];

export default postHandlers;
