import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SideBar from '@/components/organisms/SideBar/SideBar';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';
import { ProfileInfoSample } from '@/assets';

const meta = {
  title: 'organisms/SideBar',
  component: SideBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    username: { control: { type: 'text' }, defaultValue: 'Aycho' },
    badgeUrl: {
      control: { type: 'text' },
      defaultValue: 'https://example.com/badge.png',
    },
    profileImageUrl: {
      control: { type: 'text' },
      defaultValue: 'https://example.com/profile.png',
    },
    postCount: { control: { type: 'number' }, defaultValue: 23 },
    savedPostCount: { control: { type: 'number' }, defaultValue: 21 },
  },
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    username: 'Aycho',
    badgeUrl: '',
    profileImageUrl: ProfileInfoSample,
    postCount: 23,
    savedPostCount: 21,
  },
};

export const All: Story = {
  render: (args) => (
    <ul css={storyContainer}>
      <li css={storyInnerContainer}>
        <h3>기본 SideBar</h3>
        <SideBar {...args} />
      </li>
      <li css={storyInnerContainer}>
        <h3>프로필 이미지와 뱃지 없는 경우</h3>
        <SideBar
          {...args}
          username="Aycho"
          profileImageUrl=""
          badgeUrl=""
          postCount={0}
          savedPostCount={0}
        />
      </li>
      <li css={storyInnerContainer}>
        <h3>게시글 카운트와 저장한 글 카운트 다른 경우</h3>
        <SideBar
          {...args}
          username="Aycho"
          profileImageUrl={ProfileInfoSample}
          badgeUrl=""
          postCount={45}
          savedPostCount={15}
        />
      </li>
    </ul>
  ),
  args: {
    username: 'Aycho',
    badgeUrl: '',
    profileImageUrl: ProfileInfoSample,
    postCount: 23,
    savedPostCount: 21,
  },
};
