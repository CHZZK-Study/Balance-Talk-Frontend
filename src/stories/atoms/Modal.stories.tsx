import React, { useState } from 'react';
import Modal from '@/components/atoms/Modal/Modal';
import type { Meta, StoryObj } from '@storybook/react';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';

const meta = {
  title: 'atoms/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    action: {
      options: ['default', 'share', 'report', 'profile'],
      control: { type: 'radio' },
    },
    isOpen: { control: { type: 'boolean' } },
    withCloseButton: { control: { type: 'boolean' } },
    children: { control: { type: 'text' } },
  },
  args: {
    isOpen: true,
    children: 'Modal',
    withCloseButton: true,
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    action: 'default',
    withCloseButton: true,
  },
};

export const All: Story = {
  render: (args) => {
    const [modalOpen, setModalOpen] = useState<boolean>(true);
    const handleCloseModal = () => setModalOpen(!modalOpen);

    return (
      <ul css={storyContainer}>
        <li css={storyInnerContainer}>
          <h3>Close Modal</h3>
          <Modal isOpen={modalOpen} onClose={handleCloseModal} withCloseButton>
            Close Modal
          </Modal>
        </li>
        <li css={storyInnerContainer}>
          <h3>Default</h3>
          <Modal {...args}>Default Modal</Modal>
          <h3>Share</h3>
          <Modal {...args} action="share">
            Share Modal
          </Modal>
          <h3>Report</h3>
          <Modal {...args} action="report">
            Report Modal
          </Modal>
          <h3>Profile</h3>
          <Modal {...args} action="profile">
            Profile Modal
          </Modal>
        </li>
      </ul>
    );
  },
};
