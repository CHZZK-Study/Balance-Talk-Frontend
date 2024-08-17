import React from 'react';
import { ProfileSample } from '@/assets';
import ProfileSetting from '@/components/atoms/ProfileSetting/ProfileSetting';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'atoms/ProfileSetting',
  component: ProfileSetting,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isSetting: { control: { type: 'boolean' } },
  },
  args: {
    isSetting: false,
  },
} satisfies Meta<typeof ProfileSetting>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) =>
    args.isSetting ? (
      <ProfileSetting isSetting src={ProfileSample} />
    ) : (
      <ProfileSetting {...args} />
    ),
};

export const All: Story = {
  render: (args) => (
    <ul css={storyContainer}>
      <li css={storyInnerContainer}>
        <h3>isSetting</h3>
        <ProfileSetting {...args} />
        <ProfileSetting isSetting src={ProfileSample} />
      </li>
    </ul>
  ),
};
