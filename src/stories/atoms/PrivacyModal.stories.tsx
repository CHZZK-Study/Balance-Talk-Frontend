import PrivacyModal from '@/components/atoms/PrivacyModal/PrivacyModal';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'atoms/PrivacyModal',
  component: PrivacyModal,
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
} satisfies Meta<typeof PrivacyModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
  },
};
