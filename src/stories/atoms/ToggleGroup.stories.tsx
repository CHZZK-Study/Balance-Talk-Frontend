import React, { useState } from 'react';
import ToggleGroup, {
  ToggleGroupItem,
  ToggleGroupProps,
} from '@/components/atoms/ToggleGroup/ToggleGroup';
import type { Meta, StoryObj } from '@storybook/react';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';

const toggleOneTwo: ToggleGroupItem[] = [
  {
    label: 'ONE',
    value: 'ONE',
  },
  {
    label: 'TWO',
    value: 'TWO',
  },
];

const toggleItem: ToggleGroupItem[] = [
  {
    label: '인기순',
    value: 'trend',
  },
  {
    label: '최신순',
    value: 'recent',
  },
];

const meta = {
  title: 'atoms/ToggleGroup',
  component: ToggleGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    selectedValue: {
      options: toggleOneTwo.map((item) => item.value),
      control: { type: 'radio' },
    },
  },
  args: {
    items: toggleOneTwo,
  },
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: toggleOneTwo,
    selectedValue: toggleOneTwo[0].value,
  },
};

export const All: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] =
      useState<ToggleGroupProps['selectedValue']>('trend');

    return (
      <ul css={storyContainer}>
        <li css={storyInnerContainer}>
          <h3>Toggle</h3>
          <ToggleGroup
            items={toggleItem}
            selectedValue={selectedValue}
            onClick={setSelectedValue}
          />
        </li>
        <li css={storyInnerContainer}>
          <h3>Trend</h3>
          <ToggleGroup items={toggleItem} selectedValue="trend" />
          <h3>Recent</h3>
          <ToggleGroup items={toggleItem} selectedValue="recent" />
        </li>
      </ul>
    );
  },
};
