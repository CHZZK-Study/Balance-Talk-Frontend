import type { Meta, StoryObj } from '@storybook/react';
import { SubTag } from '@/components/atoms/SubTag/SubTag';

const meta = {
  title: 'atoms/SubTag',
  component: SubTag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    tag: '연예인',
  },
} satisfies Meta<typeof SubTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
