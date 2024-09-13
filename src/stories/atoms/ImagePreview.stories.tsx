/* eslint-disable no-alert */
import type { Meta, StoryObj } from '@storybook/react';
import ImagePreview from '@/components/atoms/ImagePreview/ImagePreview';
import { SampleWhole } from '@/assets';

const meta = {
  title: 'atoms/ImagePreview',
  component: ImagePreview,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    imgUrl: SampleWhole,
    onDelete: () => alert('Deleted!'),
  },
} satisfies Meta<typeof ImagePreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
