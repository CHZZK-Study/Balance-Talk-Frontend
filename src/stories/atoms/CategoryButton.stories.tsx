import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CategoryButton from '@/components/atoms/CategoryButton/CategoryButton';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';

const meta: Meta<typeof CategoryButton> = {
  title: 'atoms/CategoryButton',
  component: CategoryButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    imageType: {
      options: ['PickVote', 'RandomGame', 'TodayPick'],
      control: { type: 'radio' },
    },
    label: { control: { type: 'text' } },
  },
  args: {
    imageType: 'PickVote',
    label: 'Category Label',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageType: 'PickVote',
    label: '낼톡픽 투표하기',
  },
};

export const All: Story = {
  render: (args) => (
    <ul css={storyContainer}>
      <li css={storyInnerContainer}>
        <h3>낼톡픽 투표하기</h3>
        <CategoryButton
          {...args}
          imageType="PickVote"
          label="낼톡픽 투표하기"
        />
      </li>
      <li css={storyInnerContainer}>
        <h3>랜덤 밸런스 게임</h3>
        <CategoryButton
          {...args}
          imageType="RandomGame"
          label="랜덤 밸런스 게임"
        />
      </li>
      <li css={storyInnerContainer}>
        <h3>오늘의 톡픽 모음.zip</h3>
        <CategoryButton
          {...args}
          imageType="TodayPick"
          label="오늘의 톡픽 모음.zip"
        />
      </li>
    </ul>
  ),
};
