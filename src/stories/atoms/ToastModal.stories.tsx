import React from 'react';
import ToastModal from '@/components/atoms/ToastModal/ToastModal';
import type { Meta, StoryObj } from '@storybook/react';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';

const meta = {
  title: 'atoms/ToastModal',
  component: ToastModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    bgColor: {
      options: ['black', 'white'],
      control: { type: 'radio' },
    },
    children: { control: { type: 'text' } },
  },
  args: {
    children: 'ToastModal',
  },
} satisfies Meta<typeof ToastModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    bgColor: 'black',
  },
};

export const All: Story = {
  render: () => (
    <ul css={storyContainer}>
      <li css={storyInnerContainer}>
        <h3>Black</h3>
        <ToastModal>저장 되었습니다!</ToastModal>
        <ToastModal>아직 준비 중인 서비스입니다!</ToastModal>
        <ToastModal>신고 되었습니다.</ToastModal>
        <ToastModal>투표 후에 확인할 수 있습니다.</ToastModal>
      </li>
      <li css={storyInnerContainer}>
        <h3>White</h3>
        <ToastModal bgColor="white">저장 되었습니다!</ToastModal>
        <ToastModal bgColor="white">아직 준비 중인 서비스입니다!</ToastModal>
        <ToastModal bgColor="white">신고 되었습니다.</ToastModal>
        <ToastModal bgColor="white">투표 후에 확인할 수 있습니다.</ToastModal>
      </li>
    </ul>
  ),
};
