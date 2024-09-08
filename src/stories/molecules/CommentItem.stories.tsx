import type { Meta, StoryObj } from '@storybook/react';
import { Comment } from '@/types/comment';
import CommentItem from '@/components/molecules/CommentItem/CommentItem';
import { ProfileSample } from '@/assets';

const exampleComment: Comment = {
  id: 1,
  talkPickId: 1,
  talkPickTitle: '톡픽 제목',
  nickname: '닉네임 4',
  content: '피곤하게 산다... 그깟 새우 까주는게 뭐 대수라고!',
  option: 'A',
  likesCount: 35,
  myLike: true,
  parentId: 4,
  replyCount: 0,
  reportedCount: 0,
  createdAt: '24.07.04 14:56',
  lastModifiedAt: '24.07.04 14:56',
  blind: false,
  best: false,
  imgUrl: ProfileSample,
};

const meta: Meta<typeof CommentItem> = {
  title: 'molecules/CommentItem',
  component: CommentItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    comment: exampleComment,
  },
  args: {
    comment: exampleComment,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
