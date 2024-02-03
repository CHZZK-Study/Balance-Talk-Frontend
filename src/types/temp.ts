export type ImageInfo = {
  optionImg: string;
  optionTitle: string;
};

export type PostInfo = {
  title: string;
  views: number;
  likeCount: number;
  commentCount: number;
  voteCount: number;
  deadline: string;
  tags: string[];
  balanceOptions: {
    optionTitle: string;
    optionImg: string;
    optionDescription: string;
  }[];
  createdAt: string;
  createdBy: string;
  profilePhoto: string;
};
