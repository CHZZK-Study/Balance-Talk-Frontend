import { Member } from '@/types/member';

export const useUserrInfo = () => {
  const mockUser = { id: 1, nickname: '김성현' };
  const userInfo: Pick<Member, 'id' | 'nickname'> = { ...mockUser };

  return {
    userInfo,
    isLoggedIn: (userInfo.id && userInfo.nickname) !== undefined,
  };
};
