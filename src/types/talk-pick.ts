import { PaginationType } from './pagination';

export type TalkPickDetail = {
  id: number;
  title: string;
  content: string;
  summary: TalkPickSummary;
  optionA: string;
  optionB: string;
  sourceUrl: string;
  imgUrls: string[];
  imgStoredNames: string[];
  votesCountOfOptionA: number;
  votesCountOfOptionB: number;
  views: number;
  bookmarks: number;
  myBookmark: boolean;
  votedOption: 'A' | 'B' | null;
  writer: string;
  createdAt: string;
  isUpdated: boolean;
};

export type TalkPickSummary = {
  summaryFirstLine: string | null;
  summarySecondLine: string | null;
  summaryThirdLine: string | null;
};

export type TalkPickListItem = {
  id: number;
  title: string;
  writer: string;
  createdAt: string;
  views: number | string;
  bookmarks: number | string;
};

export interface TalkPickListPagination extends PaginationType {
  content: TalkPickListItem[];
}

export type TalkPick = Pick<
  TalkPickDetail,
  'title' | 'content' | 'summary' | 'optionA' | 'optionB'
>;

export type TodayTalkPick = Pick<
  TalkPickDetail,
  'id' | 'title' | 'optionA' | 'optionB'
>;

export type NewTalkPick = {
  title: string;
  content: string;
  optionA: string;
  optionB: string;
  sourceUrl?: string;
  storedNames: string[];
};

export interface TempTalkPick extends NewTalkPick {
  imgUrls: string[];
}
