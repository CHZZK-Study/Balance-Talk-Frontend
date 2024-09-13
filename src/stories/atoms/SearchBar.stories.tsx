import SearchBar from '@/components/atoms/SearchBar/SearchBar';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'atoms/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
