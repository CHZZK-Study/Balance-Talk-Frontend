import { PaginationType } from './pagination';

export type GameProps = {
  tag: string;
  page: number;
  size: number;
};

// 게임 목록 content
export type GameContent = {
  id: number;
  title: string;
  summary: string;
  optionATitle: string;
  optionBTitle: string;
};

// 밸런스 게임 목록 조회
export interface GamesPagination extends PaginationType {
  content: GameContent[];
}

// 게임 생성 * 수정 request
export type Game = {
  title: string;
  options: string[];
  storedImageName: string;
};

// 오늘의 밸런스톡 조회
export type TodayContent = Pick<GameContent, 'id' | 'title' | 'summary'>;

// 새로운 * 인기 게시글 목록
export type GameItem = {
  id: number;
  title: string;
  option: string;
  myBookMark: boolean;
  myVote: boolean;
  imageUrl: string;
};
