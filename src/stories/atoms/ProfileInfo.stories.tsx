import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ProfileInfo from '@/components/atoms/ProfileInfo/ProfileInfo';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';

const meta = {
  title: 'atoms/ProfileInfo',
  component: ProfileInfo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    number: { control: { type: 'text' }, defaultValue: '23' },
    label: { control: { type: 'text' }, defaultValue: '작성한 글' },
  },
} satisfies Meta<typeof ProfileInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    number: 23,
    label: '작성한 글',
  },
};

export const All: Story = {
  args: {
    number: 23,
    label: '작성한 글',
  },
  render: (args) => (
    <ul css={storyContainer}>
      <li css={storyInnerContainer}>
        <h3>기본 예시</h3>
        <ProfileInfo {...args} />
      </li>
      <li css={storyInnerContainer}>
        <h3>작성한 글</h3>
        <ProfileInfo number={23} label="작성한 글" />
      </li>
      <li css={storyInnerContainer}>
        <h3>게시글 저장</h3>
        <ProfileInfo number={21} label="게시글 저장" />
      </li>
    </ul>
  ),
};
