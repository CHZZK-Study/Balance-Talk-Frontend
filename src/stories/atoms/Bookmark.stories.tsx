import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Bookmark from '@/components/atoms/Bookmark/Bookmark';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';

const meta: Meta<typeof Bookmark> = {
  title: 'atoms/Bookmark',
  component: Bookmark,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    initialState: { control: 'boolean' },
  },
  args: {
    initialState: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialState: false,
  },
};

export const All: Story = {
  render: (args) => (
    <div css={storyContainer}>
      <div css={storyInnerContainer}>
        <h3>Default State</h3>
        <Bookmark {...args} initialState={false} />

        <h3>Pressed State</h3>
        <Bookmark {...args} initialState />
      </div>
    </div>
  ),
};
