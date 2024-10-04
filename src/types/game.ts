import { PaginationType } from './pagination';

// 게임 선택지 하나
export interface GameOption {
  id: number;
  name: string;
  imgUrl: string | null;
  description: string;
  optionType: 'A' | 'B';
}

// 게임 하나
export interface GameDetail {
  id: number;
  title: string;
  description?: string;
  gameOptions: GameOption[];
  votesCountOfOptionA: number;
  votesCountOfOptionB: number;
  myBookmark: boolean;
  votedOption: 'A' | 'B' | null;
}

// 게임 세트
export interface GameSet {
  gameDetailResponses: GameDetail[];
  isEndGameSet: boolean;
}

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
