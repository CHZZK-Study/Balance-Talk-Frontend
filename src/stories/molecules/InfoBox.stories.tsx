import React from 'react';
import InfoBox from '@/components/molecules/InfoBox/InfoBox';
import type { Meta, StoryObj } from '@storybook/react';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';

const meta: Meta<typeof InfoBox> = {
  title: 'molecules/InfoBox',
  component: InfoBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: { type: 'text' } },
    prefix: { control: { type: 'text' } },
    subtitle: { control: { type: 'text' } },
    commentCount: { control: { type: 'number' } },
    saveCount: { control: { type: 'number' } },
  },
  args: {
    title: '맨날 야근 월급 500 대기업 VS 주4일 월급 250 칼퇴근 중소',
    prefix: '내 선택',
    subtitle: '맨날 야근 월급 500 대기업',
    commentCount: 172,
    saveCount: 172,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '맨날 야근 월급 500 대기업 VS 주4일 월급 250 칼퇴근 중소',
    prefix: '내 선택',
    subtitle: '맨날 야근 월급 500 대기업',
    commentCount: 172,
    saveCount: 172,
  },
};

export const All: Story = {
  render: () => (
    <ul css={storyContainer}>
      <li css={storyInnerContainer}>
        <InfoBox
          title="맨날 야근 월급 500 대기업 VS 주4일 월급 250 칼퇴근 중소"
          prefix="내 선택"
          subtitle="맨날 야근 월급 500 대기업"
          commentCount={172}
          saveCount={172}
        />
      </li>
      <li css={storyInnerContainer}>
        <InfoBox
          title="유진 사복 패션 VS 민지 사복 패션"
          prefix="내 선택"
          subtitle="유진 사복 패션"
          commentCount={250}
          saveCount={100}
        />
      </li>
    </ul>
  ),
};
