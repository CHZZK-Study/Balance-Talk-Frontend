import React from 'react';
import ErrorMessage from '@/components/common/ErrorMessage/ErrorMessage';
import type { Meta, StoryObj } from '@storybook/react';
import { storyContainer, storyInnerContainer } from '../story.styles';

const meta = {
  title: 'commons/ErrorMessage',
  component: ErrorMessage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: { type: 'text' } },
    isError: { control: { type: 'boolean' } },
  },
  args: {
    isError: false,
    children: 'ErrorMessage',
  },
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isError: false,
    children: 'ErrorMessage',
  },
};
export const All: Story = {
  render: (args) => (
    <ul css={storyContainer}>
      <li css={storyInnerContainer}>
        <h3>IsError</h3>
        <ErrorMessage {...args}>유효합니다.</ErrorMessage>
        <ErrorMessage {...args} isError>
          유효하지 않습니다.
        </ErrorMessage>
      </li>
    </ul>
  ),
};
