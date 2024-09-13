import Pagination from '@/components/atoms/Pagination/Pagination';
import { createRangeArray } from '@/utils/array';
import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

const meta: Meta<typeof Pagination> = {
  title: 'atoms/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    selected: {
      control: { type: 'number' },
    },
    maxPage: {
      control: { type: 'number' },
    },
    onChangeNavigate: { action: 'changed' },
  },
  args: {
    selected: 1,
    maxPage: 22,
    onChangeNavigate: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selected: 1,
    maxPage: 22,
    onChangeNavigate: () => {},
  },
  render: (args) => {
    const [selectedPage, setSelectedPage] = useState(args.selected);
    const totalPages = args.maxPage;

    const handleChangeNavigate = (page: number) => {
      setSelectedPage(page);
      args.onChangeNavigate(page);
    };

    const pages = createRangeArray(selectedPage, totalPages);

    return (
      <Pagination
        pages={pages}
        selected={selectedPage}
        maxPage={totalPages}
        onChangeNavigate={handleChangeNavigate}
      />
    );
  },
};
