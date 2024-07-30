import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Comment from '@/components/molecules/Comment/Comment';
import { SampleComment } from '@/assets';

const meta = {
  title: 'molecules/Comment',
  component: Comment,
  parameters: {
    layout: 'fullscreen', // 전체 화면 레이아웃 설정
  },
  tags: ['autodocs'],
  argTypes: {
    imgUrl: { control: 'text' },
    nickname: { control: 'text' },
    createdTime: { control: 'text' },
    comment: { control: 'text' },
    likeCount: { control: 'number' },
    initialLikeState: {
      control: { type: 'radio', options: ['default', 'press'] },
    },
  },
  args: {
    imgUrl: SampleComment,
    nickname: '닉네임',
    createdTime: '24.07.04 14:56',
    comment: '피곤하게 산다... 그깟 새우 까주는게 뭐 대수라고!',
    likeCount: 35,
    initialLikeState: 'default',
  },
} satisfies Meta<typeof Comment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div css={{ padding: '20px' }}>
      <Comment {...args} />
    </div>
  ),
};

export const PressedLike: Story = {
  args: {
    initialLikeState: 'press',
    likeCount: 36,
  },
  render: (args) => (
    <div css={{ padding: '20px' }}>
      <Comment {...args} />
    </div>
  ),
};
