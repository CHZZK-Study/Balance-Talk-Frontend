import React from 'react';
import InfoLabel from '@/components/atoms/InfoLabel/InfoLabel';
import type { Meta, StoryObj } from '@storybook/react';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';

const meta: Meta<typeof InfoLabel> = {
  title: 'atoms/InfoLabel',
  component: InfoLabel,
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

export const All: Story = {
  render: () => (
    <ul css={storyContainer}>
      <li css={storyInnerContainer}>
        <InfoLabel label="톡댓톡" count={172} />
      </li>
      <li css={storyInnerContainer}>
        <InfoLabel label="저장" count={172} />
      </li>
    </ul>
  ),
};
