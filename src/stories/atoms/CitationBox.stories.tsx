import type { Meta, StoryObj } from '@storybook/react';
import CitationBox from '@/components/atoms/CitationBox/CitationBox';

const meta = {
  title: 'atoms/CitationBox',
  component: CitationBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof CitationBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
