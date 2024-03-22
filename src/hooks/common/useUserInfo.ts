import { Member } from '@/types/member';

export const useUserInfo = () => {
  const mockUser1 = { id: 1, nickname: '김성현' };
  const userInfo: Pick<Member, 'id' | 'nickname'> = { ...mockUser1 };

  return {
    userInfo,
    isLoggedIn: (userInfo.id && userInfo.nickname) !== undefined,
    // isLoggedIn: false,
  };
};
