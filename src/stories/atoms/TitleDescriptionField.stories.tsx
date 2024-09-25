/* eslint-disable no-console */
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
    onTitleChange: (e) => {
      console.log('Title:', e.target.value);
    },
    onDescriptionChange: (e) => {
      console.log('Description:', e.target.value);
    },
  },
} satisfies Meta<typeof TitleDescriptionField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
