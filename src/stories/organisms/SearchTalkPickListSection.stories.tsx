import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SearchTalkPickListSection from '@/components/organisms/SearchTalkPickListSection/SearchTalkPickListSection';

const meta = {
  title: 'organisms/SearchTalkPickListSection',
  component: SearchTalkPickListSection,

  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof SearchTalkPickListSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <SearchTalkPickListSection {...args} />,
};
