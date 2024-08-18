import type { Meta, StoryObj } from '@storybook/react';
import DraftPostButton from '@/components/atoms/DraftPostButton/DraftPostButton';

const meta = {
  title: 'atoms/DraftPostButton',
  component: DraftPostButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof DraftPostButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
