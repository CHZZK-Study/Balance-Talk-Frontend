import type { Meta, StoryObj } from '@storybook/react';
import PostActionButton from '@/components/atoms/PostActionButton/PostActionButton';

const meta = {
  title: 'atoms/PostActionButton',
  component: PostActionButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    action: 'save',
  },
} satisfies Meta<typeof PostActionButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
