import React from 'react';
import GameStageBar from '@/components/atoms/GameStageBar/GameStageBar';
import type { Meta, StoryObj } from '@storybook/react';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';

const meta = {
  title: 'atoms/GameStageBar',
  component: GameStageBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    stage: { control: { type: 'number' } },
  },
  args: {
    stage: 0,
  },
} satisfies Meta<typeof GameStageBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const All: Story = {
  render: (args) => (
    <ul css={storyContainer}>
      <li css={storyInnerContainer}>
        <h3>Stage 1</h3>
        <GameStageBar {...args} />
      </li>
      <li css={storyInnerContainer}>
        <h3>Stage 5</h3>
        <GameStageBar stage={4} />
      </li>
      <li css={storyInnerContainer}>
        <h3>Stage 10</h3>
        <GameStageBar stage={9} />
      </li>
    </ul>
  ),
};
