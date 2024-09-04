import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CategoryBox from '@/components/molecules/CategoryBox/CategoryBox';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'molecules/CategoryBox',
  component: CategoryBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
} satisfies Meta<typeof CategoryBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
