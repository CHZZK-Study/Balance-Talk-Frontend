import { useQuery } from '@tanstack/react-query';
import { getMyWritten } from '@/api/mypages';
import { MyWritten } from '@/types/mypages';

export const useMyWrittensQuery = () => {
  const { data: myWritten } = useQuery<MyWritten>({
    queryKey: ['myWritten'],
    queryFn: getMyWritten,
  });

  return { myWritten };
};
