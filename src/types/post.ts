export type Post = {
  id: number;
  title: string;
  views: number;
  commentCount: number;
  likeCount: number;
  myBookmark: boolean;
  myLike: boolean;
  deadline: string;
  tags: string[];
  balanceOptions: {
    optionImg: string;
    optionTitle: string;
  }[];
};

export type VoteInfo = {
  optionTitle: string;
  voteCount: number;
};
