import type { Meta, StoryObj } from '@storybook/react';
import TitleDescriptionField from '@/components/atoms/TitleDescriptionField/TitleDescriptionField';

const meta = {
  title: 'atoms/TitleDescriptionField',
  component: TitleDescriptionField,
  parameters: {},
  tags: ['autodocs'],
  args: {
    title: '연인 상황별 더 킹받는 순간은?',
    description: '',
  },
} satisfies Meta<typeof TitleDescriptionField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
