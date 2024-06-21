import React from 'react';
import Heading from '@/components/common/Heading/Heading';
import {
  darkMode,
  storyContainer,
  storyInnerContainer,
} from '@/stories/story.styles';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'commons/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['1', '2', '3', '4'],
      control: { type: 'radio' },
    },
    children: { control: { type: 'text' } },
  },
  args: {
    type: '1',
    children: 'Heading 1',
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: '1',
  },
  render: (args) => (
    <div css={darkMode}>
      <h3>* Heading 글자가 흰색이라 잘 보이도록 배경색을 넣었습니다.</h3>
      <Heading {...args}>Heading 1</Heading>
    </div>
  ),
};

export const All: Story = {
  render: (args) => (
    <ul css={[storyContainer, darkMode]}>
      <li css={storyInnerContainer}>
        <h3>Type</h3>
        <Heading {...args}>Heading 1</Heading>
        <Heading {...args} type="2">
          Heading 2
        </Heading>
        <Heading {...args} type="3">
          Heading 3
        </Heading>
        <Heading {...args} type="4">
          Heading 4
        </Heading>
      </li>
    </ul>
  ),
};
