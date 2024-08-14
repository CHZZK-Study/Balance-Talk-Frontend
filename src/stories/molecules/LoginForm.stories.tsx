import React from 'react';
import LoginForm from '@/components/molecules/LoginForm/LoginForm';
import type { Meta, StoryObj } from '@storybook/react';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';

const meta = {
  title: 'molecules/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    withSignInText: { control: { type: 'boolean' } },
  },
  args: {},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    withSignInText: false,
  },
};

export const All: Story = {
  render: (args) => (
    <ul css={storyContainer}>
      <li css={storyInnerContainer}>
        <h3>Default Modal</h3>
        <LoginForm {...args} />
      </li>
      <li css={storyInnerContainer}>
        <h3>withSignInText Modal</h3>
        <LoginForm {...args} withSignInText />
      </li>
    </ul>
  ),
};
