import type { Meta, StoryObj } from '@storybook/react';
import { GameRecommend } from '@/components/atoms/GameRecommendButton/GameRecommendButton';
import GameRecommendList from '@/components/molecules/GameRecommendList/GameRecommendList';
import { RecommendFirst, RecommendSecond } from '@/assets';

const exampleGameList: GameRecommend[] = [
  {
    title: '월클 BTS 정국 VS 존잘 차은우',
    optionAImg: RecommendFirst,
    optionBImg: RecommendSecond,
  },
  {
    title: '월클 BTS 정국 VS 존잘 차은우',
    optionAImg: RecommendFirst,
    optionBImg: RecommendSecond,
  },
  {
    title: '월클 BTS 정국 VS 존잘 차은우',
    optionAImg: RecommendFirst,
    optionBImg: RecommendSecond,
  },
  {
    title: '월클 BTS 정국 VS 존잘 차은우',
    optionAImg: RecommendFirst,
    optionBImg: RecommendSecond,
  },
  {
    title: '월클 BTS 정국 VS 존잘 차은우',
    optionAImg: RecommendFirst,
    optionBImg: RecommendSecond,
  },
];

const meta = {
  title: 'molecules/GameRecommendList',
  component: GameRecommendList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    gameList: exampleGameList,
  },
} satisfies Meta<typeof GameRecommendList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
