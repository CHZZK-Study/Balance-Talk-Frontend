import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CategoryBar from '@/components/molecules/CategoryBar/CategoryBar';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';

const meta = {
  title: 'molecules/CategoryBar',
  component: CategoryBar,
  tags: ['autodocs'],
  argTypes: {
    activeTab: {
      control: { type: 'radio' },
      options: ['Popular', 'Couple', 'Taste', 'Worldcup'],
    },
  },
  args: {
    activeTab: 'Popular',
  },
} satisfies Meta<typeof CategoryBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    activeTab: 'Popular',
  },
};

export const All: Story = {
  render: (args) => (
    <ul css={storyContainer}>
      <li css={storyInnerContainer}>
        <h3>Popular Tab</h3>
        <CategoryBar {...args} activeTab="Popular" />
      </li>
      <li css={storyInnerContainer}>
        <h3>Couple Tab</h3>
        <CategoryBar {...args} activeTab="Couple" />
      </li>
      <li css={storyInnerContainer}>
        <h3>Taste Tab</h3>
        <CategoryBar {...args} activeTab="Taste" />
      </li>
      <li css={storyInnerContainer}>
        <h3>Worldcup Tab</h3>
        <CategoryBar {...args} activeTab="Worldcup" />
      </li>
    </ul>
  ),
};
