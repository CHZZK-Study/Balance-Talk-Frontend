import type { Meta, StoryObj } from '@storybook/react';
import GameRecommendButton, {
  GameRecommend,
} from '@/components/atoms/GameRecommendButton/GameRecommendButton';
import { RecommendFirst, RecommendSecond } from '@/assets';

const exampleGame: GameRecommend = {
  title: '월클 BTS 정국 VS 존잘 차은우',
  optionAImg: RecommendFirst,
  optionBImg: RecommendSecond,
};

const meta = {
  title: 'atoms/GameRecommendButton',
  component: GameRecommendButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    game: exampleGame,
  },
} satisfies Meta<typeof GameRecommendButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
