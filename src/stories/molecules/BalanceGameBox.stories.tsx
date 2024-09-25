/* eslint-disable no-alert */
import type { Meta, StoryObj } from '@storybook/react';
import { BalanceGameBox } from '@/components/molecules/BalanceGameBox/BalanceGameBox';
import { SampleWhole } from '@/assets';
import { BalanceGameButtonProps } from '@/components/atoms/BalanceGameButton/BalanceGameButton';

const exampleValues: BalanceGameButtonProps[] = [
  {
    id: 0,
    imgUrl: SampleWhole,
    name: '1000억 부자 유병재',
    optionType: 'A',
    description: '어쩌고 저쩌고 저쩌고 어쩌고저쩌고 더미글',
    selectedButton: null,
    onClick: (optionType: 'A' | 'B') => alert(`Clicked ${optionType}`),
  },
  {
    id: 0,
    imgUrl: SampleWhole,
    name: '1000억 빚 거지 차은우',
    optionType: 'B',
    description: '어쩌고 저쩌고 저쩌고 어쩌고저쩌고 더미글',
    selectedButton: null,
    onClick: (optionType: 'A' | 'B') => alert(`Clicked ${optionType}`),
  },
];

const meta = {
  title: 'molecules/BalanceGameBox',
  component: BalanceGameBox,
  parameters: {},
  tags: ['autodocs'],
  args: {
    values: exampleValues,
  },
} satisfies Meta<typeof BalanceGameBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
