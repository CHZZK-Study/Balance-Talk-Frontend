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
    nickname: { control: { type: 'text' }, defaultValue: 'Aycho' },
  },
} satisfies Meta<typeof ProfileLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    nickname: 'Aycho',
  },
};

export const All: Story = {
  args: {
    nickname: 'Aycho',
  },
  render: (args) => (
    <ul css={storyContainer}>
      <li css={storyInnerContainer}>
        <h3>기본 닉네임</h3>
        <ProfileLabel {...args} />
      </li>
      <li css={storyInnerContainer}>
        <h3>다른 닉네임</h3>
        <ProfileLabel nickname="김안녕" />
      </li>
    </ul>
  ),
};
