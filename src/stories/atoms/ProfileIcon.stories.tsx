import React from 'react';
import ProfileIcon from '@/components/atoms/ProfileIcon/ProfileIcon';
import type { Meta, StoryObj } from '@storybook/react';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';

const meta = {
  title: 'atoms/ProfileIcon',
  component: ProfileIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    interaction: {
      options: ['normal', 'settings'],
      control: { type: 'radio' },
    },
    imgUrl: { control: { type: 'text' } },
    size: {
      options: ['small', 'large'],
      control: { type: 'radio' },
    },
  },
  args: {
    interaction: 'normal',
    size: 'small',
  },
} satisfies Meta<typeof ProfileIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    interaction: 'normal',
    size: 'small',
  },
};

export const All: Story = {
  render: (args) => (
    <ul css={storyContainer}>
      <li css={storyInnerContainer}>
        <h3>Normal Small</h3>
        <ProfileIcon {...args} size="small" />
        <h3>Normal Large</h3>
        <ProfileIcon {...args} size="large" />

        <h3>Settings Small</h3>
        <ProfileIcon
          interaction="settings"
          imgUrl="https://www.example.com/path/to/image.jpg"
          size="small"
        />
        <h3>Settings Large</h3>
        <ProfileIcon
          interaction="settings"
          imgUrl="https://www.example.com/path/to/image.jpg"
          size="large"
        />
      </li>
    </ul>
  ),
};
