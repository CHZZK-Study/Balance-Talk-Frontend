import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Footer from '@/components/organisms/Footer/Footer';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';

const meta: Meta<typeof Footer> = {
  title: 'organisms/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div css={storyContainer}>
      <div css={storyInnerContainer}>
        <Footer />
      </div>
    </div>
  ),
};
