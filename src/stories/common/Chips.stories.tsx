import React from 'react';
import Chips from '@/components/common/Chips/Chips';
import type { Meta, StoryObj } from '@storybook/react';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';

const meta = {
  title: 'commons/Chips',
  component: Chips,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['small', 'large'],
      control: { type: 'radio' },
    },
    children: { control: { type: 'text' } },
  },
  args: {
    size: 'large',
    children: '오늘의 밸런스톡',
  },
} satisfies Meta<typeof Chips>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'large',
  },
};

export const All: Story = {
  render: (args) => (
    <ul css={storyContainer}>
      <li css={storyInnerContainer}>
        <h3>Size</h3>
        <Chips {...args} size="small">
          Small
        </Chips>
        <Chips {...args} size="large">
          Large
        </Chips>
      </li>
    </ul>
  ),
};
