import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Header from '@/components/organisms/Header/Header';

const meta = {
  title: 'organisms/Header',
  component: Header,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Header {...args} />,
};
