import { TalkPickListItem, TalkPickListPagination } from '@/types/talk-pick';
import type { Meta, StoryObj } from '@storybook/react';
import TalkPickListSection from '@/components/organisms/TalkPickListSection/TalkPickListSection';

const exampleTalkPickList: TalkPickListItem[] = Array.from(
  { length: 30 },
  () => ({
    id: 5712,
    title: '효과적인 의사소통을 위한 비언어적 신호',
    writer: '닉네임593',
    createdAt: '2024-07-10',
    views: 2000,
    bookmarks: 3000,
  }),
);

const exampleTalkPickPagination: TalkPickListPagination = {
  totalPages: 0,
  totalElements: 0,
  size: 0,
  content: exampleTalkPickList,
  number: 0,
  sort: {
    empty: true,
    sorted: true,
    unsorted: true,
  },
  numberOfElements: 0,
  pageable: {
    offset: 0,
    sort: {
      empty: true,
      sorted: true,
      unsorted: true,
    },
    pageNumber: 0,
    pageSize: 0,
    paged: true,
    unpaged: true,
  },
  first: true,
  last: true,
  empty: true,
};

const meta = {
  title: 'organisms/TalkPickListSection',
  component: TalkPickListSection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    talkPickList: exampleTalkPickPagination,
  },
} satisfies Meta<typeof TalkPickListSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
