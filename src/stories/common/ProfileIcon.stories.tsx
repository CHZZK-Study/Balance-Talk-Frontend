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
          imgUrl="https://s3-alpha-sig.figma.com/img/5c8e/be0f/7b0b10784c7722a11c385a0625a85c69?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UgTqBSINTYFYzVhzUBn6l~rBQK6-7pxwfZHhz1I4pl91-E7EXIg4vxvXbl9zFTPDhHw9ZHPwrdUIC8nJwbmEU97SV4LLv6whUjE5cFv6I4hhQKjGP2hAn2VGxdSWRlWKCDD54c~vqc2gpU-v7W-j7tC3fZQFWlAOApi8M5O5PNoJ3nUveK3pxFvmpFwdpTxRZVEQCiEcv2gW~rAe3hXy02jN89OY4vxL2Dd-SFYgmLNCuapUi6UXaJD3vjsn5OahtgXbo3h-lDsRTy-cl9WbL~yZXVlwTaX1dWYrP4magP1SPP6ppZ4xCrymFIthtCC69M5Gj0a-mlRMkGvGc3LYJg__"
        />
      </li>
    </ul>
  ),
};
