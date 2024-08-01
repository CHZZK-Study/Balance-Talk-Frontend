import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ContentsButton from '@/components/molecules/ContentsButton/ContentsButton';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';
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
    tagLabels: { control: { type: 'object' } },
    initialBookmarkState: { control: 'boolean' },
  },
  args: {
    imgUrl: SampleWhole,
    label: '유진 VS 민지 사복 고르기',
    tagLabels: ['얼마나 맞나 보자', '#취향'],
    initialBookmarkState: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imgUrl: SampleWhole,
    label: '유진 VS 민지 사복 고르기',
    tagLabels: ['얼마나 맞나 보자', '#취향'],
    initialBookmarkState: false,
  },
};

export const All: Story = {
  render: (args) => (
    <div css={storyContainer}>
      <div css={storyInnerContainer}>
        <h3>Default</h3>
        <ContentsButton {...args} initialBookmarkState={false} />
        <h3>Pressed</h3>
        <ContentsButton {...args} initialBookmarkState />
      </div>
    </div>
  ),
};
