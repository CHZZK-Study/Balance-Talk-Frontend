import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SideBox from '@/components/molecules/SideBox/SideBox';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';

const meta = {
  title: 'molecules/SideBox',
  component: SideBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    postsCount: { control: { type: 'number' }, defaultValue: 23 },
    bookmarkedPostsCount: { control: { type: 'number' }, defaultValue: 21 },
  },
} satisfies Meta<typeof SideBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    postsCount: 23,
    bookmarkedPostsCount: 21,
  },
};

export const All: Story = {
  render: (args) => (
    <div css={storyContainer}>
      <div css={storyInnerContainer}>
        <h3>기본</h3>
        <SideBox {...args} />
      </div>
    </div>
  ),
  args: {
    postsCount: 45,
    bookmarkedPostsCount: 30,
  },
};
