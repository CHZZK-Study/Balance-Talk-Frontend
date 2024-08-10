import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import LoginPage from '@/pages/LoginPage/LoginPage';

const meta = {
  title: 'pages/LoginPage',
  component: LoginPage,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof LoginPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <LoginPage {...args} />,
};
