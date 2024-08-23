import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import OptionSelector from '@/components/molecules/OptionSelector/OptionSelector';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';

const meta = {
  title: 'molecules/OptionSelector',
  component: OptionSelector,
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: { type: 'object' },
    },
    selectedOption: {
      control: { type: 'radio' },
      options: ['내가 저장한', '내가 투표한', '내가 댓글단', '내가 작성한'],
    },
  },
  args: {
    options: ['내가 저장한', '내가 투표한', '내가 댓글단', '내가 작성한'],
    selectedOption: '내가 댓글단',
  },
} satisfies Meta<typeof OptionSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: ['내가 저장한', '내가 투표한', '내가 댓글단', '내가 작성한'],
    selectedOption: '내가 댓글단',
  },
};

export const All: Story = {
  render: (args) => (
    <ul css={storyContainer}>
      <li css={storyInnerContainer}>
        <h3>내가 저장한 Tab</h3>
        <OptionSelector {...args} selectedOption="내가 저장한" />
      </li>
      <li css={storyInnerContainer}>
        <h3>내가 투표한 Tab</h3>
        <OptionSelector {...args} selectedOption="내가 투표한" />
      </li>
      <li css={storyInnerContainer}>
        <h3>내가 댓글단 Tab</h3>
        <OptionSelector {...args} selectedOption="내가 댓글단" />
      </li>
      <li css={storyInnerContainer}>
        <h3>내가 작성한 Tab</h3>
        <OptionSelector {...args} selectedOption="내가 작성한" />
      </li>
    </ul>
  ),
};
