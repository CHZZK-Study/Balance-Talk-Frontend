import React from 'react';
import Button from '@/components/design/Button/Button';
import type { Meta, StoryObj } from '@storybook/react';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';

const meta = {
  title: 'commons/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['xSmall', 'small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    variant: {
      options: ['default', 'outline', 'cancel'],
      control: { type: 'radio' },
    },
    children: { control: { type: 'text' } },
  },
  args: {
    variant: 'default',
    size: 'medium',
    children: 'Button',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'medium',
  },
};

export const All: Story = {
  render: (args) => (
    <ul css={storyContainer}>
      <li css={storyInnerContainer}>
        <h3>Size</h3>
        <Button {...args} size="xSmall" variant="default">
          XSmall
        </Button>
        <Button {...args} size="small" variant="default">
          Small
        </Button>
        <Button {...args} size="medium" variant="default">
          Medium
        </Button>
        <Button {...args} size="large" variant="default">
          Large
        </Button>
      </li>
      <li css={storyInnerContainer}>
        <h3>Variant</h3>
        <Button {...args} size="medium" variant="default">
          Default
        </Button>
        <Button {...args} size="medium" variant="outline">
          Outline
        </Button>
        <Button {...args} size="medium" variant="cancel">
          Cancel
        </Button>
      </li>
    </ul>
  ),
};
