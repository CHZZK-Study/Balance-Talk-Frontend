/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';
import SearchTalkPickList from '@/components/molecules/SearchTalkPickList/SearchTalkPickList';
import { SampleWhole } from '@/assets';

const meta = {
  title: 'molecules/SearchTalkPickList',
  component: SearchTalkPickList,
  tags: ['autodocs'],
  argTypes: {
    searchTalkPickItems: { control: { type: 'object' } },
  },
  args: {
    searchTalkPickItems: [
      {
        title: '월클 정국 VS 존잘 차은우',
        date: '2024.08.26',
        content:
          '우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하',
        imgUrl: SampleWhole,
      },
      {
        title: '월클 정국 VS 존잘 차은우',
        date: '2024.08.26',
        content:
          '우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하',
        imgUrl: SampleWhole,
      },
      {
        title: '월클 정국 VS 존잘 차은우',
        date: '2024.08.26',
        content:
          '우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하',
        imgUrl: SampleWhole,
      },
      {
        title: '월클 정국 VS 존잘 차은우',
        date: '2024.08.26',
        content:
          '우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하',
        imgUrl: SampleWhole,
      },
      {
        title: '월클 정국 VS 존잘 차은우',
        date: '2024.08.26',
        content:
          '우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하',
        imgUrl: SampleWhole,
      },
      {
        title: '월클 정국 VS 존잘 차은우',
        date: '2024.08.26',
        content:
          '우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하',
        imgUrl: SampleWhole,
      },
      {
        title: '월클 정국 VS 존잘 차은우',
        date: '2024.08.26',
        content:
          '우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하',
        imgUrl: SampleWhole,
      },
      {
        title: '월클 정국 VS 존잘 차은우',
        date: '2024.08.26',
        content:
          '우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하',
        imgUrl: SampleWhole,
      },
      {
        title: '월클 정국 VS 존잘 차은우',
        date: '2024.08.26',
        content:
          '우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하',
        imgUrl: SampleWhole,
      },
      {
        title: '월클 정국 VS 존잘 차은우',
        date: '2024.08.26',
        content:
          '우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하',
        imgUrl: SampleWhole,
      },
    ],
  },
} satisfies Meta<typeof SearchTalkPickList>;

export default meta;
type Story = StoryObj<typeof meta>;

const withReducedSize = (StoryFn: any) => (
  <div style={{ transform: 'scale(0.5)', transformOrigin: 'top left' }}>
    {StoryFn()}
  </div>
);

export const Default: Story = {
  decorators: [withReducedSize],
  args: {
    searchTalkPickItems: [
      {
        title: '월클 정국 VS 존잘 차은우',
        date: '2024.08.26',
        content:
          '우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하',
        imgUrl: SampleWhole,
      },
    ],
  },
};

export const All: Story = {
  decorators: [withReducedSize],
  render: (args) => (
    <ul css={storyContainer}>
      <li css={storyInnerContainer}>
        <h3>Single SearchTalkPickList</h3>
        <SearchTalkPickList
          searchTalkPickItems={[args.searchTalkPickItems[0]]}
        />
      </li>

      <li css={storyInnerContainer}>
        <h3>Multiple SearchTalkPickList</h3>
        <SearchTalkPickList {...args} />
      </li>

      <li css={storyInnerContainer}>
        <h3>None</h3>
        <SearchTalkPickList searchTalkPickItems={[]} />
      </li>
    </ul>
  ),
};
