import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Tag from '@/components/atoms/Tag/Tag';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';

const meta: Meta<typeof Tag> = {
  title: 'atoms/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: { type: 'text' } },
  },
  args: {
    label: 'Sample Tag',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '화제의 중심',
  },
};

export const All: Story = {
  render: (args) => (
    <div css={storyContainer}>
      <div css={storyInnerContainer}>
        <h3>Default</h3>
        <Tag
          {...args}
          label="화제의 중심"
          style={{ top: '5px', left: '5px' }}
        />
      </div>
    </div>
  ),
};
