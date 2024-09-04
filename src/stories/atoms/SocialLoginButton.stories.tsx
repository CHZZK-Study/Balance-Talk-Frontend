import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SocialLoginButton from '@/components/atoms/SocialLoginButton/SocialLoginButton';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';

const meta: Meta<typeof SocialLoginButton> = {
  title: 'atoms/SocialLoginButton',
  component: SocialLoginButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['kakao', 'google', 'naver'],
      control: { type: 'radio' },
    },
    recent: { control: { type: 'boolean' } },
  },
  args: {
    variant: 'kakao',
    recent: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const All: Story = {
  render: (args) => (
    <ul css={storyContainer}>
      <li css={storyInnerContainer}>
        <h3>Kakao Login Button</h3>
        <SocialLoginButton {...args} />
      </li>
      <li css={storyInnerContainer}>
        <h3>Google Login Button</h3>
        <SocialLoginButton variant="google" />
      </li>
      <li css={storyInnerContainer}>
        <h3>Naver Login Button</h3>
        <SocialLoginButton variant="naver" />
      </li>
    </ul>
  ),
};
