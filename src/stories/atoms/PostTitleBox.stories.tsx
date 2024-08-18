import type { Meta, StoryObj } from '@storybook/react';
import PostTitleBox from '@/components/atoms/PostTitleBox/PostTitleBox';

const meta = {
  title: 'atoms/PostTitleBox',
  component: PostTitleBox,
  parameters: {},
  tags: ['autodocs'],
  args: {
    action: 'save',
  },
} satisfies Meta<typeof PostTitleBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
