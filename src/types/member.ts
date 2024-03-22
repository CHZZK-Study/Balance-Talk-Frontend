export type Member = {
  id: number;
  nickname: string;
  profilePhoto: string;
  createdAt: string;
  postsCount: number;
  totalPostLike: number;
  level: 0 | 1 | 2;
};

export interface MemberForm {
  email: string;
  verificationCode: string;
  nickname: string;
  password: string;
  passwordCheck: string;
}

export interface MemberSuccesForm {
  [key: string]: boolean;
}
