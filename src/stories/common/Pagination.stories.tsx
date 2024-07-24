import Pagination from '@/components/common/Pagination/Pagination';
import { createRangeArray } from '@/utils/array';
import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

const meta = {
  title: 'commons/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    pages: {
      control: { type: 'object' },
    },
    selected: {
      control: { type: 'number' },
    },
    maxPage: {
      control: { type: 'number' },
    },
    onChangeNavigate: { action: 'changed' },
  },
  args: {
    pages: createRangeArray(10 || 0),
    selected: 1,
    maxPage: 10,
    onChangeNavigate: () => {},
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [selectedPage, setSelectedPage] = useState(args.selected);
    const totalPages = args.maxPage;
    const pages = createRangeArray(totalPages || 0);
    const handleChangeNavigate = (page: number) => {
      setSelectedPage(page);
    };

    return (
      <Pagination
        pages={pages}
        selected={selectedPage}
        maxPage={pages.length}
        onChangeNavigate={handleChangeNavigate}
      />
    );
  },
};
