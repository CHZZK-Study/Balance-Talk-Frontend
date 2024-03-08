// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';
import {
  mockMyBookmarksPosts,
  mockMyCommentPosts,
  mockMyPosts,
  mockMyVotedPosts,
} from '../data/history';

const URL = process.env.API_URL;

const getMyPosts = rest.get(`${URL}/myPosts`, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(mockMyPosts));
});

const getMyCommentPosts = rest.get(`${URL}/myCommentPosts`, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(mockMyCommentPosts));
});

const getMyVotedPosts = rest.get(`${URL}/myVotedPosts`, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(mockMyVotedPosts));
});

const getMyBookmarksPosts = rest.get(
  `${URL}/bookmark/members/:memberId`,
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockMyBookmarksPosts));
  },
);

export default [
  getMyPosts,
  getMyCommentPosts,
  getMyVotedPosts,
  getMyBookmarksPosts,
];
