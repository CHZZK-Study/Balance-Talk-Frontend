// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';
import { postList, voteInfo, createdPost } from '../data/posts';
import { CreatePost } from '../../types/post';

const URL = process.env.API_URL;

const postHandlers = [
  rest.get(`${URL}/posts`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(postList));
  }),

  rest.get(`${URL}/post/:postId/vote`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(voteInfo));
  }),

  rest.post(`${URL}/posts`, async (req, res, ctx) => {
    const request: CreatePost = await req.json();
    createdPost.push(request);
    return res(ctx.status(201));
  }),
];

export default postHandlers;
