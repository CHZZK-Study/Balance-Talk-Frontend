export type TalkPickDetail = {
  id: number;
  title: string;
  content: string;
  summary: TalkPickSummary;
  optionA: string;
  optionB: string;
  votesCountOfOptionA: number;
  votesCountOfOptionB: number;
  views: number;
  bookmarks: number;
  myBookmark: boolean;
  votedOption: 'A' | 'B' | null;
  writer: string;
  lastModifiedAt: string;
  isUpdated: boolean;
};

export type TalkPickSummary = {
  summaryFirstLine: string;
  summarySecondLine: string;
  summaryThirdLine: string;
};

export type TalkPick = Pick<
  TalkPickDetail,
  'title' | 'content' | 'summary' | 'optionA' | 'optionB'
>;

export type TodayTalkPick = Pick<
  TalkPickDetail,
  'id' | 'title' | 'optionA' | 'optionB'
>;
