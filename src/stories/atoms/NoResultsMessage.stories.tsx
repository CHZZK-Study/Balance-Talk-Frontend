import type { Meta, StoryObj } from '@storybook/react';
import { NoResultsMessage } from '@/components/atoms/NoResultsMessage/NoResultsMessage';

const meta = {
  title: 'atoms/NoResultsMessage',
  component: NoResultsMessage,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {
    keyword: { control: { type: 'text' } },
    searchChoice: {
      options: ['default', 'balanceGame', 'talkPick'],
      control: { type: 'radio' },
    },
  },
  args: {
    keyword: '신라면',
    searchChoice: 'default',
  },
} satisfies Meta<typeof NoResultsMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
