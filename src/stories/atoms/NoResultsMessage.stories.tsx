import type { Meta, StoryObj } from '@storybook/react';
import { NoResultsMessage } from '@/components/atoms/NoResultsMessage/NoResultsMessage';

const meta = {
  title: 'atoms/NoResultsMessage',
  component: NoResultsMessage,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {
    keyword: { control: { type: 'text' } },
  },
  args: {
    keyword: '신라면',
  },
} satisfies Meta<typeof NoResultsMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
