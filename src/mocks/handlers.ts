// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';
import { post } from './data/posts';

const handlers = [
  rest.get('/example', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(post));
  }),
];

export default handlers;
