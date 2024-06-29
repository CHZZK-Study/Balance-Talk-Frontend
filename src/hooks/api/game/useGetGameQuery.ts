import { useQuery } from '@tanstack/react-query';
import {
  getGameList,
  getGameById,
  getTodayGame,
  getBestGames,
  getNewGames,
} from '@/api/game';
import {
  GameProps,
  GameItem,
  GamesPagination,
  TodayContent,
} from '@/types/game';

// 게임 목록 조회
export const useGameList = (gameProps: GameProps) => {
  const { data: gameList, isLoading } = useQuery<GamesPagination>({
    queryKey: ['gameList', gameProps],
    queryFn: () => getGameList(gameProps),
  });
  return { gameList, isLoading };
};

// 게임 단건 조회
export const useGameById = (postId: number) => {
  const { data: game, isLoading } = useQuery<GameItem>({
    queryKey: ['newGames', postId],
    queryFn: () => getGameById(postId),
  });
  return { game, isLoading };
};

// 오늘의 밸런스톡 조회
export const useTodayGame = () => {
  const { data: todayGame, isLoading } = useQuery<TodayContent>({
    queryKey: ['todayGame'],
    queryFn: getTodayGame,
  });
  return { todayGame, isLoading };
};

// 새로운 게시글 목록 조회
export const useNewGameList = () => {
  const { data: newGames, isLoading } = useQuery<GameItem[]>({
    queryKey: ['newGames'],
    queryFn: getNewGames,
  });
  return { newGames, isLoading };
};

// 인기 게시글 목록 조회
export const useBestGameList = () => {
  const { data: bestGames, isLoading } = useQuery<GameItem[]>({
    queryKey: ['bestGames'],
    queryFn: getBestGames,
  });
  return { bestGames, isLoading };
};
