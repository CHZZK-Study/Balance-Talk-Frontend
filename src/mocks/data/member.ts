import { Member } from '../../types/member';

export const memberList: Member[] = [
  {
    id: 1,
    nickname: '닉네임',
    profilePhoto: '../',
    createdAt: '2024-02-25T06:31:21.756Z',
    postsCount: 11,
    totalPostLike: 119,
    level: 1,
  },
  {
    id: 2,
    nickname: '닉네임',
    profilePhoto: '../',
    createdAt: '2024-02-25T06:31:21.756Z',
    postsCount: 11,
    totalPostLike: 119,
    level: 1,
  },
  {
    id: 3,
    nickname: '닉네임',
    profilePhoto: '../',
    createdAt: '2024-02-25T06:31:21.756Z',
    postsCount: 11,
    totalPostLike: 119,
    level: 1,
  },
  {
    id: 4,
    nickname: '닉네임',
    profilePhoto: '../',
    createdAt: '2024-02-25T06:31:21.756Z',
    postsCount: 11,
    totalPostLike: 119,
    level: 1,
  },
  {
    id: 5,
    nickname: '닉네임',
    profilePhoto: '../',
    createdAt: '2024-02-25T06:31:21.756Z',
    postsCount: 11,
    totalPostLike: 119,
    level: 1,
  },
  {
    id: 6,
    nickname: '닉네임',
    profilePhoto: '../',
    createdAt: '2024-02-25T06:31:21.756Z',
    postsCount: 11,
    totalPostLike: 119,
    level: 1,
  },
  {
    id: 7,
    nickname: '닉네임',
    profilePhoto: '../',
    createdAt: '2024-02-25T06:31:21.756Z',
    postsCount: 11,
    totalPostLike: 119,
    level: 1,
  },
  {
    id: 8,
    nickname: '닉네임',
    profilePhoto: '../',
    createdAt: '2024-02-25T06:31:21.756Z',
    postsCount: 11,
    totalPostLike: 119,
    level: 1,
  },
  {
    id: 9,
    nickname: '닉네임',
    profilePhoto: '../',
    createdAt: '2024-02-25T06:31:21.756Z',
    postsCount: 11,
    totalPostLike: 119,
    level: 1,
  },
  {
    id: 10,
    nickname: '닉네임',
    profilePhoto: '../',
    createdAt: '2024-02-25T06:31:21.756Z',
    postsCount: 11,
    totalPostLike: 119,
    level: 1,
  },
];

export const memberById = (memberId: number) => {
  const filteredMember = memberList.filter(
    (_member) => _member.id === memberId,
  )[0];
  return filteredMember;
};
