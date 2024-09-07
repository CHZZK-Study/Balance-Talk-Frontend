import { TalkPickListItem, TalkPickListPagination } from '@/types/talk-pick';
import type { Meta, StoryObj } from '@storybook/react';
import TalkPickListSection from '@/components/organisms/TalkPickListSection/TalkPickListSection';

const exampleTalkPickList: TalkPickListItem[] = Array.from(
  { length: 100 },
  (_, index) => ({
    id: 5712 + index,
    title: `샘플 제목 ${index + 1}`,
    writer: `작성자 ${index + 1}`,
    createdAt: '2024-07-10',
    views: 2000 + index * 10,
    bookmarks: 3000 + index * 5,
  }),
);

const exampleTalkPickPagination: TalkPickListPagination = {
  totalPages: Math.ceil(exampleTalkPickList.length / 20),
  totalElements: exampleTalkPickList.length,
  size: 20,
  content: exampleTalkPickList,
  number: 0,
  sort: {
    empty: false,
    sorted: true,
    unsorted: false,
  },
  numberOfElements:
    exampleTalkPickList.length > 20 ? 20 : exampleTalkPickList.length,
  pageable: {
    offset: 0,
    sort: {
      empty: false,
      sorted: true,
      unsorted: false,
    },
    pageNumber: 0,
    pageSize: 20,
    paged: true,
    unpaged: false,
  },
  first: true,
  last: false,
  empty: exampleTalkPickList.length === 0,
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
