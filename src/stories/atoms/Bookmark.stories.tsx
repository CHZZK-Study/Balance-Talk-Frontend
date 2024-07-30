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
    state: {
      options: ['default', 'press'],
      control: { type: 'radio' },
    },
  },
  args: {
    state: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    state: 'default',
  },
};

export const Pressed: Story = {
  args: {
    state: 'press',
  },
};

export const All: Story = {
  render: (args) => (
    <ul css={storyContainer}>
      <li css={storyInnerContainer}>
        <h3>Default</h3>
        <Bookmark {...args} state="default" />
      </li>
      <li css={storyInnerContainer}>
        <h3>Pressed</h3>
        <Bookmark {...args} state="press" />
      </li>
    </ul>
  ),
};
