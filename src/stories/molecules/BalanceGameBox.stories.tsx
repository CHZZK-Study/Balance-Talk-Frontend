import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { GameOption } from '@/types/game';
import BalanceGameBox from '@/components/molecules/BalanceGameBox/BalanceGameBox';
import { SampleWhole } from '@/assets';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';

const exampleOptions: GameOption[] = [
  {
    id: 0,
    name: '1000억 부자 유병재',
    imgUrl: SampleWhole,
    description: '어쩌고 저쩌고 저쩌고 어쩌고저쩌고 더미글',
    optionType: 'A',
  },
  {
    id: 0,
    name: '1000억 빚 거지 차은우',
    imgUrl: SampleWhole,
    description: '어쩌고 저쩌고 저쩌고 어쩌고저쩌고 더미글',
    optionType: 'B',
  },
];

const meta = {
  title: 'molecules/BalanceGameBox',
  component: BalanceGameBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    selectedOption: {
      options: ['A', 'B', null],
      control: { type: 'radio' },
    },
  },
  args: {
    options: exampleOptions,
    selectedOption: null,
  },
} satisfies Meta<typeof BalanceGameBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const All: Story = {
  render: (args) => (
    <ul css={storyContainer}>
      <li css={storyInnerContainer}>
        <h3>not selected</h3>
        <BalanceGameBox {...args} />
      </li>
      <li css={storyInnerContainer}>
        <h3>A selected</h3>
        <BalanceGameBox {...args} selectedOption="A" />
      </li>
      <li css={storyInnerContainer}>
        <h3>B selected</h3>
        <BalanceGameBox {...args} selectedOption="B" />
      </li>
    </ul>
  ),
};
