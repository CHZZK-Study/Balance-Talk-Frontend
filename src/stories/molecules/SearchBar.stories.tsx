import SearchBar from '@/components/molecules/SearchBar/SearchBar';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'molecules/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
