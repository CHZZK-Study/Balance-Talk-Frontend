import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import LikeButton from '@/components/atoms/LikeButton/LikeButton';

const meta: Meta<typeof LikeButton> = {
  title: 'atoms/LikeButton',
  component: LikeButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    initialCount: { control: 'number' },
  },
  args: {
    initialCount: 10,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialCount: 10,
  },
};

export const Pressed: Story = {
  render: (args) => {
    const [isPressed, setIsPressed] = React.useState(true);
    const handleClick = () => setIsPressed(!isPressed);

    return (
      <LikeButton
        {...args}
        initialCount={isPressed ? args.initialCount : args.initialCount - 1}
        onClick={handleClick}
      />
    );
  },
  args: {
    initialCount: 10,
  },
};

export const All: Story = {
  render: (args) => (
    <div>
      <LikeButton {...args} initialCount={10} />
      <LikeButton {...args} initialCount={100} style={{ marginTop: '20px' }} />
    </div>
  ),
};
