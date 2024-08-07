import React from 'react';
import SummaryBox from '@/components/molecules/SummaryBox/SummaryBox';
import { TalkPickSummary } from '@/types/talk-pick';
import type { Meta, StoryObj } from '@storybook/react';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';

const defaultSummary: TalkPickSummary = {
  summaryFirstLine: 'first summary line',
  summarySecondLine: 'second summary line',
  summaryThirdLine: 'third summary line',
};

const exampleSummary: TalkPickSummary = {
  summaryFirstLine: '남친이 어쩌고 저쩌고 잘못했네 안했네 대충 더미글',
  summarySecondLine: '남친이 친구 새우 껍질을 어쩌고 저쩌고 뭐라뭐라',
  summaryThirdLine: '나 너무 속상한데 이걸 찬성해 말어',
};

const meta = {
  title: 'molecules/SummaryBox',
  component: SummaryBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    summary: defaultSummary,
  },
} satisfies Meta<typeof SummaryBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const All: Story = {
  render: () => (
    <ul css={storyContainer}>
      <li css={storyInnerContainer}>
        <h3>Summary Box</h3>
        <SummaryBox summary={exampleSummary} />
      </li>
    </ul>
  ),
};
