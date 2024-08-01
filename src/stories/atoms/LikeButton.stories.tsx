import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import LikeButton, {
  LikeButtonProps,
} from '@/components/atoms/LikeButton/LikeButton';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';

const meta: Meta<LikeButtonProps> = {
  title: 'atoms/LikeButton',
  component: LikeButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    likeCount: { control: 'number' },
    likeState: { control: 'boolean' },
  },
  args: {
    likeCount: 10,
    likeState: false,
  },
};

export default meta;
type Story = StoryObj<LikeButtonProps>;

export const Default: Story = {
  args: {
    likeCount: 10,
    likeState: false,
  },
};

export const All: Story = {
  render: (args) => (
    <ul css={storyContainer}>
      <li css={storyInnerContainer}>
        <h3>Default</h3>
        <LikeButton {...args} likeState={false} />
      </li>
      <li css={storyInnerContainer}>
        <h3>Pressed</h3>
        <LikeButton {...args} likeState />
      </li>
    </ul>
  ),
};
