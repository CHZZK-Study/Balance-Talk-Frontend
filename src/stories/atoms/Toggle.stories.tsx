import React from 'react';
import Toggle from '@/components/atoms/Toggle/Toggle';
import type { Meta, StoryObj } from '@storybook/react';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';

const meta: Meta<typeof Toggle> = {
  title: 'atoms/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: { type: 'text' } },
    count: { control: { type: 'number' } },
  },
  args: {
    label: '톡댓톡',
    count: 172,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '톡댓톡',
    count: 172,
  },
};

export const Examples: Story = {
  render: () => (
    <ul css={storyContainer}>
      <li css={storyInnerContainer}>
        <Toggle label="톡댓톡" count={172} />
      </li>
      <li css={storyInnerContainer}>
        <Toggle label="댓글" count={50} />
      </li>
      <li css={storyInnerContainer}>
        <Toggle label="알림" count={3} />
      </li>
      <li css={storyInnerContainer}>
        <Toggle label="메시지" count={5} />
      </li>
    </ul>
  ),
};
