import React from 'react';
import VotePrototype from '@/components/molecules/VotePrototype/VotePrototype';
import type { Meta, StoryObj } from '@storybook/react';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';

const meta = {
  title: 'molecules/VotePrototype',
  component: VotePrototype,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'white',
      values: [
        {
          name: 'white',
          value: '#f1f1f1',
        },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    leftButtonText: { control: 'text' },
    rightButtonText: { control: 'text' },
    leftVotes: { control: 'number' },
    rightVotes: { control: 'number' },
  },
  args: {
    leftButtonText: '상관없다다다다다다',
    rightButtonText: '상관 있다',
    leftVotes: 1963,
    rightVotes: 2635,
    selectedVote: null,
  },
} satisfies Meta<typeof VotePrototype>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const All: Story = {
  render: (args) => (
    <ul css={storyContainer}>
      <li css={storyInnerContainer}>
        <h3>Defult</h3>
        <VotePrototype {...args} />
      </li>
      <li css={storyInnerContainer}>
        <h3>A Selected</h3>
        <VotePrototype {...args} selectedVote="A" />
      </li>
      <li css={storyInnerContainer}>
        <h3>B Selected</h3>
        <VotePrototype {...args} selectedVote="B" />
      </li>
    </ul>
  ),
};
