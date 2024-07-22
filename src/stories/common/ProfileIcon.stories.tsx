import React from 'react';
import ProfileIcon from '@/components/common/ProfileIcon/ProfileIcon';
import type { Meta, StoryObj } from '@storybook/react';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';

const meta = {
  title: 'commons/ProfileIcon',
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
  },
  args: {
    interaction: 'normal',
  },
} satisfies Meta<typeof ProfileIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    interaction: 'normal',
  },
};

export const All: Story = {
  render: (args) => (
    <ul css={storyContainer}>
      <li css={storyInnerContainer}>
        <h3>Normal</h3>
        <ProfileIcon {...args} />
        <h3>Settings</h3>
        <ProfileIcon
          interaction="settings"
          imgUrl="https://www.figma.com/design/NLSmVbazYeN8UxT6sB9qv6/%5BPICK-O%5D-%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84?node-id=1474-16802&t=2zl1YNC4nZTO3g09-4"
        />
      </li>
    </ul>
  ),
};
