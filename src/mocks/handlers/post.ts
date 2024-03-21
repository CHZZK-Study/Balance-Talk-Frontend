// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';
import { postList, voteInfo, createdPost, postById } from '../data/posts';
import { CreatePost } from '../../types/post';

const URL = process.env.API_URL;

const postHandlers = [
  rest.get(`${URL}/posts?member-id=1`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(postList));
  }),

  rest.get(`${URL}/post/:postId/vote`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(voteInfo));
  }),

  rest.get(`${URL}/post/:postId`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(voteInfo));
  }),

  rest.post(`${URL}/posts`, async (req, res, ctx) => {
    const request: CreatePost = await req.json();
    createdPost.push(request);
    return res(ctx.status(201));
  }),

  rest.get(`${URL}/posts/:postId`, (req, res, ctx) => {
    const postId = Number(req.params.postId);
    return res(ctx.status(200), ctx.json(postById(postId)));
  }),
  rest.get(`${URL}/posts/:postId/vote`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(voteInfo));
  }),

  rest.post(`${URL}/posts/:postId/likes`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.delete(`${URL}/posts/:postId/likes`, (req, res, ctx) => {
    return res(ctx.status(204));
  }),

  rest.post(`${URL}/bookmarks/:postId`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.delete(`${URL}/bookmarks/:postId`, (req, res, ctx) => {
    return res(ctx.status(204));
  }),
];

export default postHandlers;
