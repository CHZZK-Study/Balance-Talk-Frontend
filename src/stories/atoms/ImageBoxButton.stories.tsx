import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import store from '@/store';
import ImageBoxButton from '@/components/atoms/ImageBoxButton/ImageBoxButton';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';
import type { Meta, StoryObj } from '@storybook/react';

const queryClient = new QueryClient();

const meta = {
  title: 'atoms/ImageBoxButton',
  component: ImageBoxButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  decorators: [
    (Story) => (
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Story />
          </Router>
        </QueryClientProvider>
      </Provider>
    ),
  ],
} satisfies Meta<typeof ImageBoxButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <ImageBoxButton {...args} />,
};

export const WithUploadedImage: Story = {
  render: (args) => (
    <ul css={storyContainer}>
      <li css={storyInnerContainer}>
        <h3>Default 상태 (이미지 없음)</h3>
        <ImageBoxButton {...args} />
      </li>
      <li css={storyInnerContainer}>
        <h3>이미지 업로드 후 상태</h3>
        <ImageBoxButton {...args} />
      </li>
    </ul>
  ),
};
