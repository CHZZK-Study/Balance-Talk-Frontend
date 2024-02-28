import { Post } from '../../types/post';

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
    tags: ['음식', '음료'],
    balanceOptions: [
      {
        optionImg: 'coffee.jpg',
        optionTitle: '커피',
      },
      {
        optionImg: 'juice.jpg',
        optionTitle: '쥬스',
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
    tags: ['음식'],
    balanceOptions: [
      {
        optionImg: 'coffee.jpg',
        optionTitle: '커피',
      },
      {
        optionImg: 'juice.jpg',
        optionTitle: '쥬스',
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
    tags: ['음식'],
    balanceOptions: [
      {
        optionImg: 'coffee.jpg',
        optionTitle: '커피',
      },
      {
        optionImg: 'juice.jpg',
        optionTitle: '쥬스',
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
    tags: ['음식'],
    balanceOptions: [
      {
        optionImg: 'coffee.jpg',
        optionTitle: '커피',
      },
      {
        optionImg: 'juice.jpg',
        optionTitle: '쥬스',
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
    tags: ['음식'],
    balanceOptions: [
      {
        optionImg: 'coffee.jpg',
        optionTitle: '커피',
      },
      {
        optionImg: 'juice.jpg',
        optionTitle: '쥬스',
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
    tags: ['음식'],
    balanceOptions: [
      {
        optionImg: 'coffee.jpg',
        optionTitle: '커피',
      },
      {
        optionImg: 'juice.jpg',
        optionTitle: '쥬스',
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
    tags: ['음식'],
    balanceOptions: [
      {
        optionImg: 'coffee.jpg',
        optionTitle: '커피',
      },
      {
        optionImg: 'juice.jpg',
        optionTitle: '쥬스',
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

export const postById = (postId: number) => {
  const filteredPost = postList.filter((_post) => _post.id === postId)[0];
  filteredPost.balanceOptions[0] = {
    ...filteredPost.balanceOptions[0],
    optionDescription: '남녀노소 누구나 좋아하는 커피',
  };
  filteredPost.balanceOptions[1] = {
    ...filteredPost.balanceOptions[1],
    optionDescription: '건강에 좋고 맛도 좋은 쥬스',
  };
  filteredPost.creatorId = 1;
  return filteredPost;
};
