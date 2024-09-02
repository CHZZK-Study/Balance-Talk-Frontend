import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import MyBalanceGameList from '@/components/organisms/MyBalanceGameList/MyBalanceGameList';
import { SampleFirst, SampleSecond } from '@/assets';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';

const meta: Meta<typeof MyBalanceGameList> = {
  title: 'organisms/MyBalanceGameList',
  component: MyBalanceGameList,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: { type: 'object' },
    },
  },
  args: {
    items: [
      {
        id: 1,
        editedAt: '2024.08.06',
        title: '유진 사복 패션 VS 민지 사복 패션',
        optionAImg: SampleFirst,
        optionBImg: SampleSecond,
        mainTag: '인기',
        subTag: '화제의 중심',
        showBookmark: true,
        bookmarked: false,
      },
      {
        id: 2,
        editedAt: '2024.08.06',
        title: '유진 사복 패션 VS 민지 사복 패션',
        optionAImg: SampleFirst,
        optionBImg: SampleSecond,
        mainTag: '인기',
        subTag: '화제의 중심',
        showBookmark: true,
        bookmarked: true,
      },
      {
        id: 3,
        editedAt: '2024.08.05',
        title: '유진 사복 패션 VS 민지 사복 패션',
        optionAImg: SampleFirst,
        optionBImg: SampleSecond,
        mainTag: '인기',
        subTag: '화제의 중심',
        showBookmark: false,
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        id: 1,
        editedAt: '2024.08.06',
        title: '유진 사복 패션 VS 민지 사복 패션',
        optionAImg: SampleFirst,
        optionBImg: SampleSecond,
        mainTag: '인기',
        subTag: '화제의 중심',
        showBookmark: true,
        bookmarked: false,
      },
      {
        id: 2,
        editedAt: '2024.08.06',
        title: '유진 사복 패션 VS 민지 사복 패션',
        optionAImg: SampleFirst,
        optionBImg: SampleSecond,
        mainTag: '인기',
        subTag: '화제의 중심',
        showBookmark: true,
        bookmarked: true,
      },
      {
        id: 3,
        editedAt: '2024.08.05',
        title: '유진 사복 패션 VS 민지 사복 패션',
        optionAImg: SampleFirst,
        optionBImg: SampleSecond,
        mainTag: '인기',
        subTag: '화제의 중심',
        showBookmark: false,
      },
    ],
  },
};

export const All: Story = {
  render: (args) => (
    <div css={storyContainer}>
      <div css={storyInnerContainer}>
        <h3>2024.08.06</h3>
        <MyBalanceGameList
          {...args}
          items={[
            {
              id: 1,
              editedAt: '2024.08.06',
              title: '유진 사복 패션 VS 민지 사복 패션',
              optionAImg: SampleFirst,
              optionBImg: SampleSecond,
              mainTag: '인기',
              subTag: '화제의 중심',
              showBookmark: true,
              bookmarked: false,
            },
            {
              id: 2,
              editedAt: '2024.08.06',
              title: '유진 사복 패션 VS 민지 사복 패션',
              optionAImg: SampleFirst,
              optionBImg: SampleSecond,
              mainTag: '인기',
              subTag: '화제의 중심',
              showBookmark: true,
              bookmarked: true,
            },
            {
              id: 27,
              editedAt: '2024.08.06',
              title: '유진 사복 패션 VS 민지 사복 패션',
              optionAImg: SampleFirst,
              optionBImg: SampleSecond,
              mainTag: '인기',
              subTag: '화제의 중심',
              showBookmark: true,
              bookmarked: true,
            },
          ]}
        />
      </div>
      <div css={storyInnerContainer}>
        <h3>2024.08.05</h3>
        <MyBalanceGameList
          {...args}
          items={[
            {
              id: 3,
              editedAt: '2024.08.05',
              title: '유진 사복 패션 VS 민지 사복 패션',
              optionAImg: SampleFirst,
              optionBImg: SampleSecond,
              mainTag: '인기',
              subTag: '화제의 중심',
              showBookmark: false,
            },
            {
              id: 7,
              editedAt: '2024.08.05',
              title: '유진 사복 패션 VS 민지 사복 패션',
              optionAImg: SampleFirst,
              optionBImg: SampleSecond,
              mainTag: '인기',
              subTag: '화제의 중심',
              showBookmark: false,
            },
            {
              id: 8,
              editedAt: '2024.08.05',
              title: '유진 사복 패션 VS 민지 사복 패션',
              optionAImg: SampleFirst,
              optionBImg: SampleSecond,
              mainTag: '인기',
              subTag: '화제의 중심',
              showBookmark: false,
            },
            {
              id: 10,
              editedAt: '2024.08.05',
              title: '유진 사복 패션 VS 민지 사복 패션',
              optionAImg: SampleFirst,
              optionBImg: SampleSecond,
              mainTag: '인기',
              subTag: '화제의 중심',
              showBookmark: false,
            },
            {
              id: 11,
              editedAt: '2024.08.05',
              title: '유진 사복 패션 VS 민지 사복 패션',
              optionAImg: SampleFirst,
              optionBImg: SampleSecond,
              mainTag: '인기',
              subTag: '화제의 중심',
              showBookmark: false,
            },
          ]}
        />
      </div>
    </div>
  ),
};
