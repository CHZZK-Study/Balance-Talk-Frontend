/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import store from '@/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import type { Meta, StoryObj } from '@storybook/react';
import OptionInputBox from '@/components/atoms/OptionInputBox/OptionInputBox';

const meta = {
  title: 'atoms/OptionInputBox',
  component: OptionInputBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    option: { control: { type: 'radio' }, options: ['A', 'B'] },
  },
  args: {
    option: 'A',
    value: '',
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <ReactQueryProvider>
          <Router>
            <Story />
          </Router>
        </ReactQueryProvider>
      </Provider>
    ),
  ],
} satisfies Meta<typeof OptionInputBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    option: 'A',
    value: '',
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {},
  },
};
