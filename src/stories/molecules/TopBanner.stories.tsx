import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { TodayTalkPick } from '@/types/talk-pick';
import TopBanner from '@/components/molecules/TopBanner/TopBanner';
import type { Meta, StoryObj } from '@storybook/react';

const exampleTodayTalkPickBanner: TodayTalkPick = {
  id: 0,
  title: '내 친구한테 새우 껍질 까주는 남친,',
  optionA: '그럴 수 있다',
  optionB: '그럴 수 없다',
};

const meta = {
  title: 'molecules/TopBanner',
  component: TopBanner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    todayTalkPick: exampleTodayTalkPickBanner,
  },
  decorators: [
    (Story) => (
      <Router>
        <div style={{ width: '1500px' }}>
          <Story />
        </div>
      </Router>
    ),
  ],
} satisfies Meta<typeof TopBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
