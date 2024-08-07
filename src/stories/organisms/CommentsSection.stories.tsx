import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CommentsSection from '@/components/organisms/CommentsSection/CommentsSection';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';

const commentsData = [
  {
    id: '1',
    imgUrl: 'url1',
    nickname: '닉네임1',
    createdTime: '24.07.04 14:56',
    comment: '댓글 내용1',
    likeCount: 35,
    stance: 'pros' as 'pros' | 'cons',
  },
  {
    id: '2',
    imgUrl: 'url2',
    nickname: '닉네임2',
    createdTime: '24.07.04 14:57',
    comment: '댓글 내용2',
    likeCount: 10,
    stance: 'cons' as 'pros' | 'cons',
  },
  {
    id: '3',
    imgUrl: 'url3',
    nickname: '닉네임3',
    createdTime: '24.07.04 14:58',
    comment: '댓글 내용3',
    likeCount: 22,
    stance: 'pros' as 'pros' | 'cons',
  },
  {
    id: '4',
    imgUrl: 'url4',
    nickname: '닉네임4',
    createdTime: '24.07.04 14:59',
    comment: '댓글 내용4',
    likeCount: 50,
    stance: 'cons' as 'pros' | 'cons',
  },
  {
    id: '5',
    imgUrl: 'url5',
    nickname: '닉네임5',
    createdTime: '24.07.04 15:00',
    comment: '댓글 내용5',
    likeCount: 5,
    stance: 'pros' as 'pros' | 'cons',
  },
  {
    id: '6',
    imgUrl: 'url6',
    nickname: '닉네임6',
    createdTime: '24.07.04 15:01',
    comment: '댓글 내용6',
    likeCount: 15,
    stance: 'cons' as 'pros' | 'cons',
  },
  {
    id: '7',
    imgUrl: 'url7',
    nickname: '닉네임7',
    createdTime: '24.07.04 15:02',
    comment: '댓글 내용7',
    likeCount: 30,
    stance: 'pros' as 'pros' | 'cons',
  },
  {
    id: '8',
    imgUrl: 'url8',
    nickname: '닉네임8',
    createdTime: '24.07.04 15:03',
    comment: '댓글 내용8',
    likeCount: 25,
    stance: 'cons' as 'pros' | 'cons',
  },
];

const meta: Meta<typeof CommentsSection> = {
  title: 'organisms/CommentsSection',
  component: CommentsSection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    commentsData,
    loggedIn: true,
  },
  argTypes: {
    loggedIn: {
      control: {
        type: 'boolean',
      },
      description: 'Indicates whether the user is logged in',
      defaultValue: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div css={storyContainer}>
      <div css={storyInnerContainer}>
        <CommentsSection {...args} />
      </div>
    </div>
  ),
};

export const All: Story = {
  render: (args) => (
    <div css={storyContainer}>
      <div css={storyInnerContainer}>
        <CommentsSection {...args} />
      </div>
    </div>
  ),
  args: {
    loggedIn: false,
  },
};
