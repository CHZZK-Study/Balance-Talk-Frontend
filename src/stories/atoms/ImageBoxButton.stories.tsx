import React, { useState, ChangeEvent } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ImageBoxButton from '@/components/atoms/ImageBoxButton/ImageBoxButton';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';

const meta = {
  title: 'atoms/ImageBoxButton',
  component: ImageBoxButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    imageFile: { control: { type: 'file' }, defaultValue: null },
    onChange: { action: 'file selected' },
  },
} satisfies Meta<typeof ImageBoxButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageFile: null,
    onChange: () => {},
  },
};

export const All: Story = {
  render: () => {
    const [imageFile, setImageFile] = useState<File | null>(null);

    const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        setImageFile(file);
      }
    };

    return (
      <ul css={storyContainer}>
        <li css={storyInnerContainer}>
          <h3>기본 상태</h3>
          <ImageBoxButton imageFile={null} onChange={handleImageUpload} />
        </li>
        <li css={storyInnerContainer}>
          <h3>업로드된 이미지</h3>
          <ImageBoxButton imageFile={imageFile} onChange={handleImageUpload} />
        </li>
      </ul>
    );
  },
  args: {
    imageFile: null,
    onChange: () => {},
  },
};
