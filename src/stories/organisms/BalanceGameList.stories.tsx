import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';
import BalanceGameList from '@/components/organisms/BalanceGameList/BalanceGameList';
import { SampleFirst, SampleSecond } from '@/assets';

const meta = {
  title: 'organisms/BalanceGameList',
  component: BalanceGameList,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    contents: {
      control: { type: 'object' },
    },
  },
  args: {
    contents: [
      {
        imgUrl: [SampleFirst, SampleSecond],
        id: 1,
        title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
        tagLabels: ['화제의 중심', '#인기'],
        bookmarkState: true,
        optionA: '만원 지하철 1시간 등교',
        optionB: '좌석 널널한 버스 2시간 등교',
      },
      {
        imgUrl: [SampleFirst, SampleSecond],
        id: 2,
        title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
        tagLabels: ['화제의 중심', '#인기'],
        bookmarkState: false,
        optionA: '만원 지하철 1시간 등교',
        optionB: '좌석 널널한 버스 2시간 등교',
      },
      {
        imgUrl: [SampleFirst, SampleSecond],
        id: 3,
        title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
        tagLabels: ['화제의 중심', '#인기'],
        bookmarkState: false,
        optionA: '만원 지하철 1시간 등교',
        optionB: '좌석 널널한 버스 2시간 등교',
      },
      {
        imgUrl: [SampleFirst, SampleSecond],
        id: 4,
        title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
        tagLabels: ['화제의 중심', '#인기'],
        bookmarkState: false,
        optionA: '만원 지하철 1시간 등교',
        optionB: '좌석 널널한 버스 2시간 등교',
      },
    ],
  },
} satisfies Meta<typeof BalanceGameList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    contents: [
      {
        imgUrl: [SampleFirst, SampleSecond],
        id: 1,
        title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
        tagLabels: ['화제의 중심', '#인기'],
        bookmarkState: false,
        optionA: '만원 지하철 1시간 등교',
        optionB: '좌석 널널한 버스 2시간 등교',
      },
      {
        imgUrl: [SampleFirst, SampleSecond],
        id: 2,
        title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
        tagLabels: ['화제의 중심', '#인기'],
        bookmarkState: false,
        optionA: '만원 지하철 1시간 등교',
        optionB: '좌석 널널한 버스 2시간 등교',
      },
      {
        imgUrl: [SampleFirst, SampleSecond],
        id: 3,
        title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
        tagLabels: ['화제의 중심', '#인기'],
        bookmarkState: false,
        optionA: '만원 지하철 1시간 등교',
        optionB: '좌석 널널한 버스 2시간 등교',
      },
      {
        imgUrl: [SampleFirst, SampleSecond],
        id: 4,
        title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
        tagLabels: ['화제의 중심', '#인기'],
        bookmarkState: false,
        optionA: '만원 지하철 1시간 등교',
        optionB: '좌석 널널한 버스 2시간 등교',
      },
      {
        imgUrl: [SampleFirst, SampleSecond],
        id: 5,
        title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
        tagLabels: ['화제의 중심', '#인기'],
        bookmarkState: false,
        optionA: '만원 지하철 1시간 등교',
        optionB: '좌석 널널한 버스 2시간 등교',
      },
      {
        imgUrl: [SampleFirst, SampleSecond],
        id: 6,
        title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
        tagLabels: ['화제의 중심', '#인기'],
        bookmarkState: false,
        optionA: '만원 지하철 1시간 등교',
        optionB: '좌석 널널한 버스 2시간 등교',
      },
      {
        imgUrl: [SampleFirst, SampleSecond],
        id: 7,
        title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
        tagLabels: ['화제의 중심', '#인기'],
        bookmarkState: false,
        optionA: '만원 지하철 1시간 등교',
        optionB: '좌석 널널한 버스 2시간 등교',
      },
      {
        imgUrl: [SampleFirst, SampleSecond],
        id: 8,
        title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
        tagLabels: ['화제의 중심', '#인기'],
        bookmarkState: false,
        optionA: '만원 지하철 1시간 등교',
        optionB: '좌석 널널한 버스 2시간 등교',
      },
      {
        imgUrl: [SampleFirst, SampleSecond],
        id: 9,
        title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
        tagLabels: ['화제의 중심', '#인기'],
        bookmarkState: false,
        optionA: '만원 지하철 1시간 등교',
        optionB: '좌석 널널한 버스 2시간 등교',
      },
      {
        imgUrl: [SampleFirst, SampleSecond],
        id: 10,
        title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
        tagLabels: ['화제의 중심', '#인기'],
        bookmarkState: false,
        optionA: '만원 지하철 1시간 등교',
        optionB: '좌석 널널한 버스 2시간 등교',
      },
      {
        imgUrl: [SampleFirst, SampleSecond],
        id: 11,
        title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
        tagLabels: ['화제의 중심', '#인기'],
        bookmarkState: false,
        optionA: '만원 지하철 1시간 등교',
        optionB: '좌석 널널한 버스 2시간 등교',
      },
      {
        imgUrl: [SampleFirst, SampleSecond],
        id: 12,
        title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
        tagLabels: ['화제의 중심', '#인기'],
        bookmarkState: false,
        optionA: '만원 지하철 1시간 등교',
        optionB: '좌석 널널한 버스 2시간 등교',
      },
      {
        imgUrl: [SampleFirst, SampleSecond],
        id: 13,
        title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
        tagLabels: ['화제의 중심', '#인기'],
        bookmarkState: false,
        optionA: '만원 지하철 1시간 등교',
        optionB: '좌석 널널한 버스 2시간 등교',
      },
      {
        imgUrl: [SampleFirst, SampleSecond],
        id: 14,
        title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
        tagLabels: ['화제의 중심', '#인기'],
        bookmarkState: false,
        optionA: '만원 지하철 1시간 등교',
        optionB: '좌석 널널한 버스 2시간 등교',
      },
      {
        imgUrl: [SampleFirst, SampleSecond],
        id: 15,
        title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
        tagLabels: ['화제의 중심', '#인기'],
        bookmarkState: false,
        optionA: '만원 지하철 1시간 등교',
        optionB: '좌석 널널한 버스 2시간 등교',
      },
      {
        imgUrl: [SampleFirst, SampleSecond],
        id: 16,
        title: '만원 지하철 1시간 등교 VS 좌석 널널한 버스 2시간 등교',
        tagLabels: ['화제의 중심', '#인기'],
        bookmarkState: false,
        optionA: '만원 지하철 1시간 등교',
        optionB: '좌석 널널한 버스 2시간 등교',
      },
    ],
  },
};

export const All: Story = {
  render: (args) => (
    <ul css={storyContainer}>
      <li css={storyInnerContainer}>
        <h3>Single Notification</h3>
        <BalanceGameList contents={[args.contents[0]]} />
      </li>

      <li css={storyInnerContainer}>
        <h3>Multiple Notification</h3>
        <BalanceGameList {...args} />
      </li>

      <li css={storyInnerContainer}>
        <h3>None</h3>
        <BalanceGameList contents={[]} />
      </li>
    </ul>
  ),
};
