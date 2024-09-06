import React, { useState } from 'react';
import SearchResultBar from '@/components/molecules/SearchResultBar/SearchResultBar';
import type { Meta, StoryObj } from '@storybook/react';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';

const meta = {
  title: 'molecules/SearchResultBar',
  component: SearchResultBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    selectedValue: {
      options: ['all', 'talkpick', 'game'],
      control: { type: 'radio' },
    },
  },
  args: {
    selectedValue: 'all',
  },
} satisfies Meta<typeof SearchResultBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const All: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState<
      'all' | 'talkpick' | 'game'
    >('all');

    return (
      <ul css={storyContainer}>
        <li css={storyInnerContainer}>
          <h3>Toggle</h3>
          <SearchResultBar
            selectedValue={selectedValue}
            onClick={setSelectedValue}
          />
        </li>
      </ul>
    );
  },
};
