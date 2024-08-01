import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CommentProfile, {
  CommentProfileProps,
} from '@/components/atoms/CommentProfile/CommentProfile';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';
import { ProfileSample } from '@/assets';

const meta: Meta<CommentProfileProps> = {
  title: 'atoms/CommentProfile',
  component: CommentProfile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    stance: {
      options: ['pros', 'cons'],
      control: { type: 'radio' },
    },
    imgUrl: { control: 'text' },
  },
  args: {
    stance: 'pros',
    imgUrl: ProfileSample,
  },
};

export default meta;
type Story = StoryObj<CommentProfileProps>;

export const Default: Story = {
  args: {
    stance: 'pros',
    imgUrl: ProfileSample,
  },
};

export const All: Story = {
  render: (args) => (
    <ul css={storyContainer}>
      <li css={storyInnerContainer}>
        <h3>찬성</h3>
        <CommentProfile {...args} stance="pros" />
      </li>
      <li css={storyInnerContainer}>
        <h3>반대</h3>
        <CommentProfile {...args} stance="cons" />
      </li>
    </ul>
  ),
};
