import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import OptionBar from '@/components/organisms/OptionBar/OptionBar';
import { OptionKeys } from '@/constants/optionSets';

const meta: Meta<typeof OptionBar> = {
  title: 'organisms/OptionBar',
  component: OptionBar,
  tags: ['autodocs'],
  argTypes: {
    initialSelectedGroupValue: {
      control: { type: 'radio' },
      options: [OptionKeys.TALK_PICK, OptionKeys.BALANCE_GAME],
    },
  },
  args: {
    initialSelectedGroupValue: OptionKeys.TALK_PICK,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectGroupItems: [
      { label: '톡픽', value: OptionKeys.TALK_PICK },
      { label: '밸런스 게임', value: OptionKeys.BALANCE_GAME },
    ],
    initialSelectedGroupValue: OptionKeys.TALK_PICK,
  },
};

export const All: Story = {
  render: (args) => (
    <div>
      <h3>톡픽 선택시</h3>
      <OptionBar
        {...args}
        selectGroupItems={[
          { label: '톡픽', value: OptionKeys.TALK_PICK },
          { label: '밸런스 게임', value: OptionKeys.BALANCE_GAME },
        ]}
        initialSelectedGroupValue={OptionKeys.TALK_PICK}
      />
      <h3>밸런스 게임 선택시</h3>
      <OptionBar
        {...args}
        selectGroupItems={[
          { label: '톡픽', value: OptionKeys.TALK_PICK },
          { label: '밸런스 게임', value: OptionKeys.BALANCE_GAME },
        ]}
        initialSelectedGroupValue={OptionKeys.BALANCE_GAME}
      />
    </div>
  ),
};
