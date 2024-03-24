import { NPost, Post } from '@/types/post';

export const postList: Post[] = [
  {
    id: 1,
    title: '카페',
    views: 126,
    commentCount: 12,
    likeCount: 6,
    myBookmark: true,
    myLike: true,
    deadline: '2022-02-22',
    postTags: [
      {
        tagName: '음식',
      },
    ],
    balanceOptions: [
      {
        title: '커피',
        description: '커피',
        storedFileName: undefined,
      },
      {
        title: '쥬스',
        description: '쥬스',
        storedFileName: undefined,
      },
    ],
  },
  {
    id: 2,
    title: '카페',
    views: 126,
    commentCount: 12,
    likeCount: 6,
    myBookmark: true,
    myLike: false,
    deadline: '2022-02-22',
    postTags: [
      {
        tagName: '음식',
      },
    ],
    balanceOptions: [
      {
        title: '커피',
        description: '커피',
        storedFileName: undefined,
      },
      {
        title: '쥬스',
        description: '쥬스',
        storedFileName: undefined,
      },
    ],
  },
  {
    id: 3,
    title: '카페',
    views: 126,
    commentCount: 12,
    likeCount: 6,
    myBookmark: true,
    myLike: true,
    deadline: '2022-02-22',
    postTags: [
      {
        tagName: '음식',
      },
    ],
    balanceOptions: [
      {
        title: '커피',
        description: '커피',
        storedFileName: undefined,
      },
      {
        title: '쥬스',
        description: '쥬스',
        storedFileName: undefined,
      },
    ],
  },
  {
    id: 4,
    title: '카페',
    views: 126,
    commentCount: 12,
    likeCount: 6,
    myBookmark: true,
    myLike: true,
    deadline: '2022-02-22',
    postTags: [
      {
        tagName: '음식',
      },
    ],
    balanceOptions: [
      {
        title: '커피',
        description: '커피',
        storedFileName: undefined,
      },
      {
        title: '쥬스',
        description: '쥬스',
        storedFileName: undefined,
      },
    ],
  },
  {
    id: 5,
    title: '카페',
    views: 126,
    commentCount: 12,
    likeCount: 6,
    myBookmark: true,
    myLike: true,
    deadline: '2022-02-22',
    postTags: [
      {
        tagName: '음식',
      },
    ],
    balanceOptions: [
      {
        title: '커피',
        description: '커피',
        storedFileName: undefined,
      },
      {
        title: '쥬스',
        description: '쥬스',
        storedFileName: undefined,
      },
    ],
  },
  {
    id: 6,
    title: '카페',
    views: 126,
    commentCount: 12,
    likeCount: 6,
    myBookmark: true,
    myLike: true,
    deadline: '2022-02-22',
    postTags: [
      {
        tagName: '음식',
      },
    ],
    balanceOptions: [
      {
        title: '커피',
        description: '커피',
        storedFileName: undefined,
      },
      {
        title: '쥬스',
        description: '쥬스',
        storedFileName: undefined,
      },
    ],
  },
  {
    id: 7,
    title: '카페',
    views: 126,
    commentCount: 12,
    likeCount: 6,
    myBookmark: true,
    myLike: true,
    deadline: '2022-02-22',
    postTags: [
      {
        tagName: '음식',
      },
    ],
    balanceOptions: [
      {
        title: '커피',
        description: '커피',
        storedFileName: undefined,
      },
      {
        title: '쥬스',
        description: '쥬스',
        storedFileName: undefined,
      },
    ],
  },
];

export const voteInfo = [
  {
    optionTitle: '선택지1 제목',
    voteCount: 3412,
  },
  {
    optionTitle: '선택지2 제목',
    voteCount: 532,
  },
];

export const post = {
  title: '카페 주문',
  views: 126,
  likeCount: 6,
  deadline: '2022-02-22',
  tags: ['음식'],
  balanceOptions: [
    {
      optionTitle: '선택지 제목',
      optionImg: '../img1.jpg',
      optionDescription: '선택지 설명...',
    },
    {
      optionImg: '../img2.jpg',
      optionTitle: '선택지 제목',
      optionDescription: '선택지 설명...',
    },
  ],
  createdAt: '2022-02-12',
  createdBy: '작성자 닉네임',
  profilePhoto: '프로필 사진(선택)',
};

export const createdPost = [
  {
    title: 'A vs B',
    postCategory: 'CASUAL',
    deadline: '2024-12-15T10:00:00',
    tags: ['태그1', '태그2', '태그3'],
    balanceOptions: [
      {
        title: 'option1',
        description: 'description1',
        file: {
          uploadName: '사진1',
          path: '/...',
          type: 'JPEG',
          size: '236',
        },
      },
      {
        title: 'option2',
        description: 'description2',
        file: {
          uploadName: '사진1',
          path: '/...',
          type: 'JPEG',
          size: '236',
        },
      },
    ],
  },
];

export const postById = (postId?: number) => {
  const postMockData: NPost = {
    id: 1,
    title: '카페 주문',
    deadline: '2024-03-14T01:32:49.283Z',
    views: 126,
    likesCount: 15,
    myLike: true,
    myBookmark: true,
    category: 'CASUAL',
    totalVotesCount: 1224,
    balanceOptions: [
      {
        balanceOptionId: 1,
        title: '커피',
        description: '남녀노소 누구나 좋아하는 커피',
        storedFileName: 'coffee.jpg',
      },
      {
        balanceOptionId: 2,
        title: '쥬스',
        description: '건강에 좋고 맛도 좋은 쥬스',
        storedFileName: 'juice.jpg',
      },
    ],

    postTags: [
      { tagName: '음료' },
      { tagName: '카페' },
      { tagName: 'Beverage' },
    ],
    createdAt: '2024/03/14 01:32:49',
    createdBy: '김성현',
    selectedOptionId: 2,
  };

  return postId && postMockData;
};
