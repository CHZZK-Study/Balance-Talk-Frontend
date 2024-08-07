import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';
import Notification from '@/components/molecules/Notification/Notification';

const meta = {
  title: 'molecules/Notification',
  component: Notification,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    notifications: { control: { type: 'object' } },
  },
  args: {
    notifications: [
      {
        category: '톡픽',
        date: '24.07.29',
        title: '이별 사유 이게 말이 돼?',
        content: '· 작성한 댓글이 하트 10개를 달성했어요.',
        isNew: true,
      },
      {
        category: '내가 작성한 톡픽',
        date: '24.07.29',
        title: '취업 내맘은 뭘까..?',
        content: '· 20명이 톡픽을 저장했어요.',
        isNew: false,
      },
      {
        category: '내가 작성한 톡픽',
        date: '24.07.29',
        title: '취업 내맘은 뭘까..?',
        content: '· 100명이 투표했어요! 결과를 확인하러 가볼까요?',
        isNew: false,
      },
      {
        category: '커플 밸런스 게임',
        date: '24.07.29',
        title: '[데이트 코스 골라볼까?]을 저장했어요.',
        content: '· 마이페이지_내가 저정한 밸런스 게임',
        isNew: false,
      },
      {
        category: '톡픽',
        date: '24.07.29',
        title: '잠이냐 밥이냐 그것이 문제로다',
        content: "· 내가 투표한 '잠'이 투표 비율 2배로 압승중이네요!",
        isNew: false,
      },
      {
        category: '톡픽',
        date: '24.07.29',
        title: '잠이냐 밥이냐 그것이 문제로다',
        content: "· 내가 투표한 '잠'이 투표 비율 2배로 압승중이네요!",
        isNew: false,
      },
      {
        category: '톡픽',
        date: '24.07.29',
        title: '잠이냐 밥이냐 그것이 문제로다',
        content: "· 내가 투표한 '잠'이 투표 비율 2배로 압승중이네요!",
        isNew: false,
      },
    ],
  },
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isNew: false,
    notifications: [
      {
        category: '카테고리',
        date: '24.07.30',
        title: '제목',
        content: '· 알림 내용',
        isNew: false,
      },
    ],
  },
};

export const All: Story = {
  render: (args) => (
    <ul css={storyContainer}>
      <li css={storyInnerContainer}>
        <h3>Single Notification</h3>
        <Notification isNew={false} notifications={[args.notifications[0]]} />
      </li>

      <li css={storyInnerContainer}>
        <h3>Multiple Notification</h3>
        <Notification {...args} />
      </li>

      <li css={storyInnerContainer}>
        <h3>None</h3>
        <Notification notifications={[]} />
      </li>
    </ul>
  ),
};
