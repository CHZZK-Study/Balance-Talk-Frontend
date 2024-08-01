import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Comment from '@/components/molecules/Comment/Comment';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';
import { ProfileSample } from '@/assets';

const meta: Meta<typeof Comment> = {
  title: 'molecules/Comment',
  component: Comment,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    imgUrl: { control: 'text' },
    nickname: { control: 'text' },
    createdTime: { control: 'text' },
    comment: { control: 'text' },
    likeCount: { control: 'number' },
    initialLikeState: { control: 'boolean' },
    stance: {
      options: ['pros', 'cons'],
      control: { type: 'radio' },
    },
  },
  args: {
    imgUrl: ProfileSample,
    nickname: '닉네임4',
    createdTime: '24.07.04 14:56',
    comment: '피곤하게 산다... 그깟 새우 까주는게 뭐 대수라고!',
    likeCount: 35,
    initialLikeState: false,
    stance: 'pros',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '800px', margin: 'auto' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imgUrl: ProfileSample,
    nickname: '닉네임4',
    createdTime: '24.07.04 14:56',
    comment: '피곤하게 산다... 그깟 새우 까주는게 뭐 대수라고!',
    likeCount: 35,
    initialLikeState: false,
    stance: 'pros',
  },
};

export const All: Story = {
  render: (args) => (
    <div css={storyContainer}>
      <div css={storyInnerContainer}>
        <Comment
          {...args}
          imgUrl={ProfileSample}
          nickname="닉네임4"
          createdTime="24.07.04 14:56"
          comment="피곤하게 산다... 그깟 새우 까주는게 뭐 대수라고!"
          likeCount={35}
          initialLikeState={false}
          stance="pros"
        />
      </div>
    </div>
  ),
};
