import React from 'react';
import TopBanner from '@/components/molecules/TopBanner/TopBanner';
import type { Meta, StoryObj } from '@storybook/react';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';

const exampleBanner = {
  title: '깻잎 논쟁 당신의 선택은?',
  summary:
    '1. 저녁 식사 중 남자친구가 친구에게 깻잎을 떼어주자 나는 불편한 감정을 느꼈다. \n2. 집에 돌아와 남자친구에게 솔직하게 말했고, 그는 미안해하며 이해해 주었다. \n3. 친구들과 이 문제를 논의했지만 결론은 나지 않았고, 사람마다 다르게 받아들일 수 있음을 깨달았다.',
};

const meta = {
  title: 'molecules/TopBanner',
  component: TopBanner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: { type: 'text' } },
    summary: { control: { type: 'text' } },
    isLoading: { control: { type: 'boolean' } },
  },
  args: {
    title: exampleBanner.title,
    summary: exampleBanner.summary,
  },
} satisfies Meta<typeof TopBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: exampleBanner.title,
    summary: exampleBanner.summary,
    isLoading: false,
  },
};

export const All: Story = {
  render: (args) => (
    <ul css={storyContainer}>
      <li css={storyInnerContainer}>
        <h3>Default</h3>
        <TopBanner
          title={exampleBanner.title}
          summary={exampleBanner.summary}
          isLoading={false}
        />
        <h3>Loading</h3>
        <TopBanner {...args} isLoading />
      </li>
    </ul>
  ),
};
