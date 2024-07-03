import { PaginationType } from './pagination';

export interface Game {
  title: string;
  optionA: string;
  optionB: string;
}

export interface GameContent extends Game {
  id: number;
}

export interface GameItem extends GameContent {
  myBookMark: boolean;
  myVote: boolean;
}

export interface GamesPagination extends PaginationType {
  content: GameContent[];
}
