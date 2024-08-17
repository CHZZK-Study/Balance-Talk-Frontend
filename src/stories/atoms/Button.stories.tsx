import React from 'react';
import Button from '@/components/atoms/Button/Button';
import type { Meta, StoryObj } from '@storybook/react';
import {
  storyContainer,
  storyInnerContainer,
  storyInnerRowContainer,
} from '@/stories/story.styles';
import { AngleSmallDown, Search } from '@/assets';

const meta = {
  title: 'atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['large', 'medium'],
      control: { type: 'radio' },
    },
    variant: {
      options: [
        'primary',
        'roundPrimary',
        'roundPrimary2',
        'outlinePrimary',
        'outlineSecondary',
        'outlineShadow',
        'outlineHighlightR',
        'outlineHighlightB',
        'circle',
      ],
      control: { type: 'radio' },
    },
    children: { control: { type: 'text' } },
  },
  args: {
    variant: 'primary',
    size: 'large',
    children: 'Button',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'large',
  },
};

export const All: Story = {
  render: (args) => (
    <ul css={storyContainer}>
      <li css={storyInnerContainer}>
        <h1>Variant</h1>
        <Button {...args} variant="primary">
          primary
        </Button>
        <li css={storyInnerRowContainer}>
          <Button {...args} variant="roundPrimary">
            roundPrimary Large
          </Button>
          <Button {...args} variant="roundPrimary" size="medium">
            roundPrimary Medium
          </Button>
        </li>
        <Button {...args} variant="roundPrimary2">
          roundPrimary2
        </Button>
        <Button {...args} variant="outlinePrimary">
          outlinePrimary
        </Button>
        <Button {...args} variant="outlineSecondary">
          outlineSecondary
        </Button>
        <div css={storyInnerRowContainer}>
          <Button {...args} variant="outlineShadow">
            outlineShadow Large
          </Button>
          <Button {...args} variant="outlineShadow" size="medium">
            outlineShadow Medium
          </Button>
        </div>
        <Button {...args} variant="outlineHighlightR">
          outlineHighlightR
        </Button>
        <Button {...args} variant="outlineHighlightB">
          outlineHighlightB
        </Button>
        <Button {...args} variant="circle">
          <Search />
        </Button>
      </li>
      <li css={storyInnerContainer}>
        <h1>Icon</h1>
        <Button {...args} variant="outlineShadow" iconLeft={<AngleSmallDown />}>
          Icon Left
        </Button>
        <Button
          {...args}
          variant="outlineShadow"
          iconRight={<AngleSmallDown />}
        >
          Icon Right
        </Button>
        <Button
          {...args}
          variant="outlineShadow"
          iconLeft={<AngleSmallDown />}
          iconRight={<AngleSmallDown />}
        >
          Icon Both
        </Button>
      </li>
    </ul>
  ),
};
