export type Member = {
  id: number;
  nickname: string;
  profilePhoto: string;
  createdAt: string;
  postsCount: number;
  totalPostLike: number;
  level: number;
};

export interface MemberForm {
  email: string;
  code: string;
  nickname: string;
  password: string;
  passwordCheck: string;
}
