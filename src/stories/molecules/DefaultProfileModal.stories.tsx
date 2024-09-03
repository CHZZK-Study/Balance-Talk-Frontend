import DefaultProfileModal from '@/components/molecules/DefaultProfileModal/DefaultProfileModal';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'molecules/DefaultProfileModal',
  component: DefaultProfileModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: { type: 'boolean' } },
  },
  args: {
    isOpen: true,
  },
} satisfies Meta<typeof DefaultProfileModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
  },
};
