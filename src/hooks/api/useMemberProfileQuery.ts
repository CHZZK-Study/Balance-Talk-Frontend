import { getMemberProfile } from '@/api/member/member';
import { Member } from '@/types/member';
import { useQuery } from '@tanstack/react-query';

export const useMemberProfileQuery = (memberId: number) => {
  const { data: memberProfile } = useQuery<Omit<Member, 'id'>>({
    queryKey: ['members', memberId],
    queryFn: () => getMemberProfile(memberId),
    enabled: !!memberId,
  });
  return { memberProfile };
};
