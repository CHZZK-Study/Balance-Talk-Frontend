import React from 'react';
import Button from '@/components/common/Button/Button';
import type { Meta, StoryObj } from '@storybook/react';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';
import { Email } from '@/assets';

const meta = {
  title: 'commons/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['small', 'large'],
      control: { type: 'radio' },
    },
    variant: {
      options: [
        'solidPrimary',
        'solidNeutral',
        'outlinePrimary',
        'outlineAssistive',
      ],
      control: { type: 'radio' },
    },
    children: { control: { type: 'text' } },
  },
  args: {
    variant: 'solidPrimary',
    size: 'large',
    children: 'Button',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'solidPrimary',
    size: 'large',
  },
};

export const All: Story = {
  render: (args) => (
    <ul css={storyContainer}>
      <li css={storyInnerContainer}>
        <h3>Size</h3>
        <Button {...args} size="small" variant="solidPrimary">
          Small
        </Button>
        <Button {...args} size="large" variant="solidPrimary">
          Large
        </Button>
      </li>
      <li css={storyInnerContainer}>
        <h3>Variant</h3>
        <Button {...args} size="large" variant="solidPrimary">
          solidPrimary
        </Button>
        <Button {...args} size="large" variant="solidNeutral">
          solidNeutral
        </Button>
        <Button {...args} size="large" variant="outlinePrimary">
          outlinePrimary
        </Button>
        <Button {...args} size="large" variant="outlineAssistive">
          outlineAssistive
        </Button>
      </li>
      <li css={storyInnerContainer}>
        <h3>Variant Disable</h3>
        <Button {...args} size="large" variant="solidPrimary" disabled>
          solidPrimary
        </Button>
        <Button {...args} size="large" variant="solidNeutral" disabled>
          solidNeutral
        </Button>
        <Button {...args} size="large" variant="outlinePrimary" disabled>
          outlinePrimary
        </Button>
        <Button {...args} size="large" variant="outlineAssistive" disabled>
          outlineAssistive
        </Button>
      </li>
      <li css={storyInnerContainer}>
        <h3>Icon</h3>
        <Button
          {...args}
          size="large"
          variant="solidPrimary"
          iconLeft={<Email />}
        >
          Icon Left
        </Button>
        <Button
          {...args}
          size="large"
          variant="solidPrimary"
          iconRight={<Email />}
        >
          Icon Right
        </Button>
        <Button
          {...args}
          size="large"
          variant="solidPrimary"
          iconLeft={<Email />}
          iconRight={<Email />}
        >
          Icon Both
        </Button>
      </li>
    </ul>
  ),
};
