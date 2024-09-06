/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SearchTalkPickListSection from '@/components/organisms/SearchTalkPickListSection/SearchTalkPickListSection';
import { SampleWhole } from '@/assets';
import { SearchTalkPickItemProps } from '@/components/atoms/SearchTalkPickItem/SearchTalkPickItem';

const SearchTalkPickItems: SearchTalkPickItemProps[] = Array.from(
  { length: 30 },
  (_, index) => ({
    title: '월클 정국 VS 존잘 차은우',
    date: '2024.08.26',
    content:
      '우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하우하하',
    imgUrl: SampleWhole,
  }),
);

const meta = {
  title: 'organisms/SearchTalkPickListSection',
  component: SearchTalkPickListSection,

  tags: ['autodocs'],
  args: {
    searchTalkPickList: SearchTalkPickItems,
  },
} satisfies Meta<typeof SearchTalkPickListSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <SearchTalkPickListSection {...args} />,
};
