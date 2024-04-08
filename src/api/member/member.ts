import { END_POINT } from '@/constants/api';
import { Member, MemberForm } from '../../types/member';
import { axiosInstance } from '../interceptor';

const URL = process.env.API_URL;

export const fetchMembers = async (): Promise<Member[]> => {
  const response = await fetch(`${URL}/members`);
  const result = (await response.json()) as Member[];
  return result;
};

export const fetchMember = async (memberId: number): Promise<Member> => {
  const response = await fetch(`${URL}/members/${memberId}`);
  const result = (await response.json()) as Member;
  return result;
};

export const getMember = async (memberId: number) => {
  const { data } = await axiosInstance.get<Member>(
    `${END_POINT.MEMBER(memberId)}`,
  );
  return data;
};

export const postMember = async (
  form: Pick<MemberForm, 'nickname' | 'email' | 'password'>,
) => {
  const { data } = await axiosInstance.post<string>(
    `${END_POINT.SIGN_UP}`,
    form,
  );
  return data;
};

export const deleteMember = async (
  form: Pick<MemberForm, 'email' | 'password'>,
) => {
  const params = {
    data: form,
  };

  const { data } = await axiosInstance.delete<string>(
    `${END_POINT.ALL_MEMBERS}`,
    params,
  );
  return data;
};

export const putMemberImage = async (profilePhoto: string) => {
  const { data } = await axiosInstance.put<string>(
    `${END_POINT.MEMBER_IMAGE}`,
    profilePhoto,
    {
      headers: {
        'Content-Type': 'text/plain',
      },
    },
  );
  return data;
};

export const putMemberNickname = async (nickname: string) => {
  const { data } = await axiosInstance.put<string>(
    `${END_POINT.MEMBER_NICKNAME}`,
    nickname,
    {
      headers: {
        'Content-Type': 'text/plain',
      },
    },
  );
  return data;
};

export const putMemberPw = async (pw: string) => {
  const { data } = await axiosInstance.put<string>(
    `${END_POINT.MEMBER_PASSWORD}`,
    pw,
    {
      headers: {
        'Content-Type': 'text/plain',
      },
    },
  );
  return data;
};
