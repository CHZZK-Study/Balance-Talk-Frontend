import { getMember } from '@/api/member';
import { Member } from '@/types/member';
import { useQuery } from '@tanstack/react-query';

export const useMemberQuery = (memberId: number) => {
  const { data: member } = useQuery<Member>({
    queryKey: ['members', memberId],
    queryFn: () => getMember(memberId),
    enabled: !!memberId,
  });
  return { member };
};
