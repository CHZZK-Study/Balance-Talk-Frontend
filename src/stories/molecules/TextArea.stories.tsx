import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TextArea from '@/components/molecules/TextArea/TextArea';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';

const meta: Meta<typeof TextArea> = {
  title: 'molecules/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'radio' }, options: ['large', 'medium'] },
    value: { control: 'text' },
    placeholder: { control: 'text' },
    label: { control: 'text' },
    onChange: { action: 'changed' },
    onSubmit: { action: 'submitted' },
  },
  args: {
    size: 'large',
    value: '',
    placeholder: '댓글을 입력하세요',
    label: '답글달기',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'large',
    value: '',
    placeholder: '댓글을 입력하세요',
    label: '답글달기',
  },
};

export const All: Story = {
  render: (args) => {
    const [largeText, setLargeText] = useState('');
    const [mediumText, setMediumText] = useState('');

    return (
      <div css={storyContainer}>
        <div css={storyInnerContainer}>
          <h3>Large</h3>
          <TextArea
            {...args}
            size="large"
            value={largeText}
            onChange={(e) => setLargeText(e.target.value)}
            onSubmit={() => alert('버튼 클릭됨!')}
          />
        </div>
        <div css={storyInnerContainer}>
          <h3>Medium</h3>
          <TextArea
            {...args}
            size="medium"
            value={mediumText}
            onChange={(e) => setMediumText(e.target.value)}
            onSubmit={() => alert('버튼 클릭됨!')}
          />
        </div>
      </div>
    );
  },
};
