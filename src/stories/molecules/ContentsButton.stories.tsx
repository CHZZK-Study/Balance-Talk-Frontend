import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ContentsButton from '@/components/molecules/ContentsButton/ContentsButton';
import { SampleWhole } from '@/assets';

const meta: Meta<typeof ContentsButton> = {
  title: 'molecules/ContentsButton',
  component: ContentsButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    imgUrl: { control: 'text' },
    label: { control: 'text' },
    tagLabel: { control: 'text' },
    bookmarkState: {
      control: 'radio',
      options: ['default', 'press'],
    },
  },
  args: {
    imgUrl: SampleWhole,
    label: '편한 집 데이트 VS 액티브한 활동 데이트',
    tagLabel: '알아가볼까',
    bookmarkState: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imgUrl: SampleWhole,
    label: '편한 집 데이트 VS 액티브한 활동 데이트',
    tagLabel: '알아가볼까',
    bookmarkState: 'default',
  },
};

export const PressedBookmark: Story = {
  args: {
    imgUrl: SampleWhole,
    label: '편한 집 데이트 VS 액티브한 활동 데이트',
    tagLabel: '알아가볼까',
    bookmarkState: 'press',
  },
};

export const All: Story = {
  render: (args) => (
    <div>
      <ContentsButton {...args} bookmarkState="default" />
      <ContentsButton
        {...args}
        bookmarkState="press"
        style={{ marginTop: '20px' }}
      />
    </div>
  ),
};
