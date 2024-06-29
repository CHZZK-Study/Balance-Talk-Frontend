import { PaginationType } from './pagination';

export type GameProps = {
  tag: string;
  page: number;
  size: number;
};

export type GameContent = {
  id: number;
  title: string;
  summary: string;
  optionATitle: string;
  optionBTitle: string;
};

export interface GamesPagination extends PaginationType {
  content: GameContent[];
}

export type Game = {
  title: string;
  options: string[];
  storedImageName: string;
};

export type TodayContent = Pick<GameContent, 'id' | 'title' | 'summary'>;

export type GameItem = {
  id: number;
  title: string;
  option: string;
  myBookMark: boolean;
  myVote: boolean;
  imageUrl: string;
};
