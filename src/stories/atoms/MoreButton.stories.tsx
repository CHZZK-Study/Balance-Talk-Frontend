import type { Meta, StoryObj } from '@storybook/react';
import MoreButton from '@/components/atoms/MoreButton/MoreButton';

const meta = {
  title: 'atoms/MoreButton',
  component: MoreButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MoreButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
