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
      options: [OptionKeys.TOPIC, OptionKeys.BALANCE_GAME],
    },
  },
  args: {
    initialSelectedGroupValue: OptionKeys.TOPIC,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectGroupItems: [
      { label: '톡픽', value: OptionKeys.TOPIC },
      { label: '밸런스 게임', value: OptionKeys.BALANCE_GAME },
    ],
    initialSelectedGroupValue: OptionKeys.TOPIC,
  },
};

export const All: Story = {
  render: (args) => (
    <div>
      <h3>OptionBar with TOPIC selected</h3>
      <OptionBar
        {...args}
        selectGroupItems={[
          { label: '톡픽', value: OptionKeys.TOPIC },
          { label: '밸런스 게임', value: OptionKeys.BALANCE_GAME },
        ]}
        initialSelectedGroupValue={OptionKeys.TOPIC}
      />
      <h3>OptionBar with BALANCE_GAME selected</h3>
      <OptionBar
        {...args}
        selectGroupItems={[
          { label: '톡픽', value: OptionKeys.TOPIC },
          { label: '밸런스 게임', value: OptionKeys.BALANCE_GAME },
        ]}
        initialSelectedGroupValue={OptionKeys.BALANCE_GAME}
      />
    </div>
  ),
};
