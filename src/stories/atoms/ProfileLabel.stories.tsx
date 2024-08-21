import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ProfileLabel from '@/components/atoms/ProfileLabel/ProfileLabel';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';

const meta = {
  title: 'atoms/ProfileLabel',
  component: ProfileLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    badgeUrl: { control: { type: 'text' } },
    children: { control: { type: 'text' }, defaultValue: 'Aycho' },
  },
} satisfies Meta<typeof ProfileLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    badgeUrl: '',
    children: 'Aycho',
  },
};
export const All: Story = {
  render: (args) => (
    <ul css={storyContainer}>
      <li css={storyInnerContainer}>
        <h3>기본 + label 부재시</h3>
        <ProfileLabel {...args} />
      </li>
      <li css={storyInnerContainer}>
        <h3>뱃지 사진이 없을 때</h3>
        <ProfileLabel badgeUrl="">Aycho</ProfileLabel>
      </li>
      <li css={storyInnerContainer}>
        <h3>뱃지 이미지 있을 때(imgUrl은 임시)</h3>
        <ProfileLabel badgeUrl="https://anything.png">Aycho</ProfileLabel>
      </li>
    </ul>
  ),
};
