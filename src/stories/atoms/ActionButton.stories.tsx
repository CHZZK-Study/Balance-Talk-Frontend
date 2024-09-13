import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ActionButton from '@/components/atoms/ActionButton/ActionButton';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';

const meta = {
  title: 'atoms/ActionButton',
  component: ActionButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: { type: 'text' }, defaultValue: '활동 내역' },
    iconType: {
      control: { type: 'select' },
      options: ['activity', 'edit', 'withdraw'],
      defaultValue: 'activity',
    },
  },
} satisfies Meta<typeof ActionButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '활동 내역',
    iconType: 'activity',
  },
};

export const All: Story = {
  args: {
    label: '활동 내역',
    iconType: 'activity',
  },
  render: (args) => (
    <ul css={storyContainer}>
      <li css={storyInnerContainer}>
        <h3>활동 내역(기본)</h3>
        <ActionButton {...args} />
      </li>
      <li css={storyInnerContainer}>
        <h3>회원정보 수정</h3>
        <ActionButton label="회원정보 수정" iconType="edit" />
      </li>
      <li css={storyInnerContainer}>
        <h3>회원탈퇴</h3>
        <ActionButton label="회원탈퇴" iconType="withdraw" />
      </li>
    </ul>
  ),
};
