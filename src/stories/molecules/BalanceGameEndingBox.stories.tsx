import BalanceGameEndingBox from '@/components/molecules/BalanceGameEndingBox/BalanceGameEndingBox';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'molecules/BalanceGameEndingBox',
  component: BalanceGameEndingBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    title: '결정사 상대방 고르기',
    gameSetId: 0,
  },
} satisfies Meta<typeof BalanceGameEndingBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
