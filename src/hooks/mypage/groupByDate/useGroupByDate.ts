import { useMemo } from 'react';

export function useGroupByDate<T extends { date: string }>(items: T[]) {
  return useMemo(() => {
    return items.reduce(
      (acc, item) => {
        if (!acc[item.date]) {
          acc[item.date] = [];
        }
        acc[item.date].push(item);
        return acc;
      },
      {} as Record<string, T[]>,
    );
  }, [items]);
}
