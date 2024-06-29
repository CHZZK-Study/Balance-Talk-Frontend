import { END_POINT } from '@/constants/api';
import {
  Game,
  GameProps,
  GameItem,
  GamesPagination,
  TodayContent,
} from '@/types/game';
import { axiosInstance } from './interceptor';

export const getGameList = async ({ tag, page, size }: GameProps) => {
  const { data } = await axiosInstance.get<GamesPagination>(
    `${END_POINT.GAME_LIST}`,
    {
      params: { tag, page, size },
    },
  );
  return data;
};

export const postGame = async (gameData: Game) => {
  const { data } = await axiosInstance.post<GameItem>(
    END_POINT.CREATE_GAME,
    gameData,
  );
  return data;
};

export const getGameById = async (postId: number) => {
  const { data } = await axiosInstance.get<GameItem>(
    `${END_POINT.GAME(postId)}`,
  );
  return data;
};

export const patchGame = async (postId: number, gameData: Game) => {
  const { data } = await axiosInstance.patch<GameItem>(
    END_POINT.EDIT_GAME(postId),
    gameData,
  );
  return data;
};

export const deleteGame = async (postId: number) => {
  const { data } = await axiosInstance.delete<string>(
    END_POINT.DELETE_GAME(postId),
  );
  return data;
};

export const getTodayGame = async () => {
  const { data } = await axiosInstance.get<TodayContent>(
    `${END_POINT.TODAY_GAME}`,
  );
  return data;
};

export const getNewGames = async () => {
  const { data } = await axiosInstance.get<GameItem[]>(`${END_POINT.NEW_GAME}`);
  return data;
};

export const getBestGames = async () => {
  const { data } = await axiosInstance.get<GameItem[]>(
    `${END_POINT.BEST_GAME}`,
  );
  return data;
};
