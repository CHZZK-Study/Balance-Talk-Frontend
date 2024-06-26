import React from 'react';
import ChallengeButton from '@/components/common/ChallengeButton/ChallengeButton';
import type { Meta, StoryObj } from '@storybook/react';
import { storyContainer, storyInnerRowContainer } from '@/stories/story.styles';

const meta = {
  title: 'commons/ChallengeButton',
  component: ChallengeButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    highlight: { control: { type: 'boolean' } },
    title: { control: { type: 'text' } },
    description: { control: { type: 'text' } },
  },
  args: {
    highlight: false,
    title: '낼.밸.톡 투표하기',
    description:
      '매일 새롭게 업데이트되는 흥미로운 주제들에 대해 의견을 나누고, 친구들과 함께 최종 결정을 내려보세요.',
  },
} satisfies Meta<typeof ChallengeButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    highlight: false,
    title: '낼.밸.톡 투표하기',
    description:
      '매일 새롭게 업데이트되는 흥미로운 주제들에 대해 의견을 나누고, 친구들과 함께 최종 결정을 내려보세요.',
  },
};

export const All: Story = {
  render: (args) => (
    <ul css={storyContainer}>
      <h3>Highlight</h3>
      <li css={storyInnerRowContainer}>
        <ChallengeButton
          highlight
          title="오늘의 밸런스톡"
          description="흥미진진한 썰을 풀어내고, 그 사건에 대해 찬반 밸런스게임을 즐기며 친구들과 의견을 나누어보세요!"
        />
        <ChallengeButton {...args} />
      </li>
    </ul>
  ),
};
