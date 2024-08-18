import type { Meta, StoryObj } from '@storybook/react';
import OptionInputBox from '@/components/atoms/OptionInputBox/OptionInputBox';

const meta = {
  title: 'atoms/OptionInputBox',
  component: OptionInputBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    option: 'A',
  },
} satisfies Meta<typeof OptionInputBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
