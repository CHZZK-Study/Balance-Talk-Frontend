import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import InteractionButton from '@/components/atoms/InteractionButton/InteractionButton';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';
import { BookmarkDF, Share } from '@/assets';

const meta = {
  title: 'atoms/InteractionButton',
  component: InteractionButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    buttonLabel: {
      control: { type: 'text' },
      defaultValue: '이 게임 제법 폼이 좋아?',
    },
    icon: {
      control: { type: 'select' },
      options: ['BookmarkDF', 'Share'],
      mapping: {
        BookmarkDF: <BookmarkDF />,
        Share: <Share />,
      },
      defaultValue: 'BookmarkDF',
    },
    iconLabel: { control: { type: 'text' }, defaultValue: '저장하기' },
  },
} satisfies Meta<typeof InteractionButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    buttonLabel: '이 게임 제법 폼이 좋아?',
    icon: <BookmarkDF />,
    iconLabel: '저장하기',
    onClick: () => {
      console.log('저장하기 버튼 클릭됨');
    },
  },
};

export const All: Story = {
  args: {
    buttonLabel: '이 게임 제법 폼이 좋아?',
    icon: <BookmarkDF />,
    iconLabel: '저장하기',
    onClick: () => {
      console.log('저장하기 버튼 클릭됨');
    },
  },
  render: (args) => (
    <ul css={storyContainer}>
      <li css={storyInnerContainer}>
        <h3>저장하기 버튼</h3>
        <InteractionButton {...args} />
      </li>
      <li css={storyInnerContainer}>
        <h3>공유하기 버튼</h3>
        <InteractionButton
          buttonLabel="다른 사람들은 어떤 선택을 할까?"
          icon={<Share />}
          iconLabel="공유하기"
          onClick={() => console.log('공유하기 버튼 클릭됨')}
        />
      </li>
    </ul>
  ),
};
