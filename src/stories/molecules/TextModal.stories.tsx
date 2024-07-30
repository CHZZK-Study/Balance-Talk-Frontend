import React from 'react';
import TextModal from '@/components/molecules/TextModal/TextModal';
import type { Meta, StoryObj } from '@storybook/react';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';

const meta = {
  title: 'molecules/TextModal',
  component: TextModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: { control: { type: 'text' } },
    isOpen: { control: { type: 'boolean' } },
  },
  args: {
    isOpen: true,
    text: 'Text Modal',
  },
} satisfies Meta<typeof TextModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    text: 'Text Modal',
  },
};

export const All: Story = {
  render: (args) => (
    <ul css={storyContainer}>
      <li css={storyInnerContainer}>
        <h3>Delete Comment Modal</h3>
        <TextModal {...args} text="작성한 댓글을 삭제하시겠습니까?" />
        <h3>Report Comment Modal</h3>
        <TextModal {...args} text="해당 댓글을 신고하시겠습니까?" />
      </li>
    </ul>
  ),
};
