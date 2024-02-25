// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';
import { memberById, memberList } from '../data/member';

const URL = process.env.API_URL;

const getMembers = rest.get(`${URL}/members`, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(memberList));
});

const getMember = rest.get(`${URL}/members/:memberId`, (req, res, ctx) => {
  const memberId = Number(req.params.memberId);
  return res(ctx.status(200), ctx.json(memberById(memberId)));
});

export default [getMembers, getMember];
