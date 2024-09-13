import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import MyContentList from '@/components/organisms/MyContentList/MyContentList';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';

const meta = {
  title: 'organisms/MyContentList',
  component: MyContentList,
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
        commentCount: 172,
        bookmarks: 172,
        showBookmark: true,
        bookmarked: false,
      },
      {
        id: 2,
        editedAt: '2024.08.06',
        title: '유진 사복 패션 VS 민지 사복 패션',
        commentCount: 250,
        bookmarks: 200,
        showBookmark: true,
        bookmarked: true,
      },
      {
        id: 3,
        editedAt: '2024.08.05',
        title: '유진 사복 패션 VS 민지 사복 패션',
        commentCount: 100,
        bookmarks: 50,
        showBookmark: false,
      },
    ],
  },
} satisfies Meta<typeof MyContentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        id: 1,
        editedAt: '2024.08.06',
        title: '유진 사복 패션 VS 민지 사복 패션',
        commentCount: 172,
        bookmarks: 172,
        showBookmark: true,
        bookmarked: false,
      },
      {
        id: 2,
        editedAt: '2024.08.06',
        title: '유진 사복 패션 VS 민지 사복 패션',
        commentCount: 250,
        bookmarks: 200,
        showBookmark: true,
        bookmarked: true,
      },
      {
        id: 3,
        editedAt: '2024.08.05',
        title: '유진 사복 패션 VS 민지 사복 패션',
        commentCount: 100,
        bookmarks: 50,
        showBookmark: false,
      },
    ],
  },
};

export const All: Story = {
  render: (args) => (
    <ul css={storyContainer}>
      <li css={storyInnerContainer}>
        <h3>2024.08.06</h3>
        <MyContentList
          {...args}
          items={[
            {
              id: 11,
              editedAt: '2024.08.06',
              title: '유진 사복 패션 VS 민지 사복 패션',
              commentCount: 172,
              bookmarks: 172,
              showBookmark: true,
              bookmarked: false,
            },
            {
              id: 17,
              editedAt: '2024.08.06',
              title: '유진 사복 패션 VS 민지 사복 패션',
              commentCount: 250,
              bookmarks: 200,
              showBookmark: true,
              bookmarked: true,
            },
          ]}
        />
      </li>
      <li css={storyInnerContainer}>
        <h3>2024.08.05</h3>
        <MyContentList
          {...args}
          items={[
            {
              id: 27,
              editedAt: '2024.08.05',
              title: '유진 사복 패션 VS 민지 사복 패션',
              commentCount: 100,
              bookmarks: 50,
              showBookmark: false,
            },
          ]}
        />
      </li>
    </ul>
  ),
};
