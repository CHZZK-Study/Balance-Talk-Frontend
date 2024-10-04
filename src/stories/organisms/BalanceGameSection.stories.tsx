import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { GameOption, GameDetail } from '@/types/game';
import { SampleWhole } from '@/assets';
import BalanceGameSection from '@/components/organisms/BalanceGameSection/BalanceGameSection';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';

const exampleOptions: GameOption[] = [
  {
    id: 0,
    name: '1000억 부자 유병재',
    imgUrl: SampleWhole,
    description: '어쩌고 저쩌고 저쩌고 어쩌고저쩌고 더미글',
    optionType: 'A',
  },
  {
    id: 0,
    name: '1000억 빚 거지 차은우',
    imgUrl: SampleWhole,
    description: '어쩌고 저쩌고 저쩌고 어쩌고저쩌고 더미글',
    optionType: 'B',
  },
];

const exampleGame: GameDetail = {
  id: 0,
  title: '결정사 상대방 고르기',
  description:
    '500만원주고 가입한 결정사. 이제 마지막 남은 주선 기회는 1번. 당신은 누굴 택할것인가',
  gameOptions: exampleOptions,
  votesCountOfOptionA: 0,
  votesCountOfOptionB: 0,
  myBookmark: true,
  votedOption: 'A',
};

const meta: Meta<typeof BalanceGameSection> = {
  title: 'organisms/BalanceGameSection',
  component: BalanceGameSection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    game: exampleGame,
    gameStage: 3,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div css={storyContainer}>
      <div css={storyInnerContainer}>
        <BalanceGameSection {...args} />
      </div>
    </div>
  ),
};
