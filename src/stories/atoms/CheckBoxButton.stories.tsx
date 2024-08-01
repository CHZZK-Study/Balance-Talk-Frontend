import React from 'react';
import CheckBoxButton from '@/components/atoms/CheckBoxButton/CheckBoxButton';
import type { Meta, StoryObj } from '@storybook/react';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';

const meta = {
  title: 'atoms/CheckBoxButton',
  component: CheckBoxButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: { type: 'text' } },
  },
  args: {
    children: 'TEXT',
  },
} satisfies Meta<typeof CheckBoxButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const All: Story = {
  render: () => (
    <ul css={storyContainer}>
      <li css={storyInnerContainer}>
        <h3>Default</h3>
        <CheckBoxButton>Default</CheckBoxButton>
      </li>
      <li css={storyContainer}>
        <h3>Checked</h3>
        <CheckBoxButton checked>Checked</CheckBoxButton>
      </li>
    </ul>
  ),
};
