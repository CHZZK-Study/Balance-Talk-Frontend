export type TalkPickDetail = {
  id: number;
  title: string;
  content: string;
  summary: string;
  optionA: string;
  optionB: string;
  views: number;
  likesCount: number;
  myLike: boolean;
  myBookmark: boolean;
  myVote: boolean;
  votedOption: 'A' | 'B';
};

export type TalkPick = Pick<
  TalkPickDetail,
  'title' | 'content' | 'summary' | 'optionA' | 'optionB'
>;
