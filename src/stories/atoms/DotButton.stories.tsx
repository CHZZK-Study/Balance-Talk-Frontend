import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import DotButton from '@/components/atoms/DotButton/DotButton';

const meta: Meta<typeof DotButton> = {
  title: 'atoms/DotButton',
  component: DotButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Opened: Story = {
  render: (args) => <DotButton {...args} />,
  args: {},
};

export const WithOtherContent: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '20px' }}>
      <DotButton {...args} />
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'lightgrey',
        }}
      >
        Other Content
      </div>
    </div>
  ),
  args: {},
};
