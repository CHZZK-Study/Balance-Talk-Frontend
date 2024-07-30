import ShareModal from '@/components/molecules/ShareModal/ShareModal';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'molecules/ShareModal',
  component: ShareModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    link: { control: { type: 'text' } },
    isOpen: { control: { type: 'boolean' } },
  },
  args: {
    link: 'https://comic.naver.com/webtoon/det...',
    isOpen: true,
  },
} satisfies Meta<typeof ShareModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    link: 'https://comic.naver.com/webtoon/det...',
    isOpen: true,
  },
};
