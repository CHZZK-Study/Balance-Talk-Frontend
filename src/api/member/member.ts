import { Member } from '../../types/member';

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
