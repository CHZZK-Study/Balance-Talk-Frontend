import React from 'react';
import Modal from '@/components/common/Modal/Modal';
import type { Meta, StoryObj } from '@storybook/react';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';

const meta = {
  title: 'commons/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    action: {
      options: ['default', 'share'],
      control: { type: 'radio' },
    },
    children: { control: { type: 'text' } },
  },
  args: {
    children: '모달 확인용 텍스트',
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    action: 'default',
  },
};

export const All: Story = {
  render: () => (
    <ul css={storyContainer}>
      <li css={storyInnerContainer}>
        <h3>Default</h3>
        <Modal>기본 팝업 확인용 텍스트</Modal>
        <h3>Share</h3>
        <Modal action="share">공유하기 팝업 확인용 텍스트</Modal>
      </li>
    </ul>
  ),
};
