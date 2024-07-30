import React from 'react';
import LoginModal from '@/components/molecules/LoginModal/LoginModal';
import type { Meta, StoryObj } from '@storybook/react';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';

const meta = {
  title: 'molecules/LoginModal',
  component: LoginModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    withSignInText: { control: { type: 'boolean' } },
    isOpen: { control: { type: 'boolean' } },
  },
  args: {
    isOpen: true,
  },
} satisfies Meta<typeof LoginModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    withSignInText: false,
    isOpen: true,
  },
};

export const All: Story = {
  render: (args) => (
    <ul css={storyContainer}>
      <li css={storyInnerContainer}>
        <h3>Default Modal</h3>
        <LoginModal {...args} />
      </li>
      <li css={storyInnerContainer}>
        <h3>withSignInText Modal</h3>
        <LoginModal {...args} withSignInText />
      </li>
    </ul>
  ),
};
