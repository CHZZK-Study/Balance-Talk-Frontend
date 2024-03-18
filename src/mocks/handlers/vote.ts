// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

const URL = process.env.API_URL;

const voteHandlers = [
  rest.post(`${URL}/posts/:postId/vote`, (req, res, ctx) => {
    return res(ctx.status(201));
  }),
  rest.put(`${URL}/posts/:postId/vote`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];

export default voteHandlers;
