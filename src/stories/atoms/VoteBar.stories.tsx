import React from 'react';
import VoteBar from '@/components/atoms/VoteBar/VoteBar';
import type { Meta, StoryObj } from '@storybook/react';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';

const meta = {
  title: 'atoms/VoteBar',
  component: VoteBar,
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
    leftPercentage: { control: { type: 'number', min: 0, max: 100 } },
    rightPercentage: { control: { type: 'number', min: 0, max: 100 } },
    leftVotes: { control: { type: 'number', min: 0 } },
    rightVotes: { control: { type: 'number', min: 0 } },
    selectedBar: {
      control: { type: 'radio', options: ['left', 'right', null] },
    },
  },
  args: {
    leftPercentage: 50,
    rightPercentage: 50,
    leftVotes: 100,
    rightVotes: 100,
    selectedBar: 'left',
  },
} satisfies Meta<typeof VoteBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    leftPercentage: 50,
    rightPercentage: 50,
    leftVotes: 100,
    rightVotes: 100,
    selectedBar: 'left',
  },
};

export const All: Story = {
  parameters: {
    backgrounds: {
      default: 'white',
    },
  },
  render: (args) => {
    return (
      <div css={storyContainer}>
        <div css={storyInnerContainer}>
          <h3>Default VoteBar</h3>
          <VoteBar {...args} />
        </div>
        <div css={storyInnerContainer}>
          <h3>Skewed VoteBar</h3>
          <VoteBar
            leftPercentage={30}
            rightPercentage={70}
            leftVotes={60}
            rightVotes={140}
            selectedBar="right"
          />
        </div>
      </div>
    );
  },
};
