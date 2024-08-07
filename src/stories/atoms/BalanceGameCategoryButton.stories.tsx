import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Popular, Couple, Taste, Worldcup } from '@/assets';
import BalanceGameCategoryButton from '@/components/atoms/BalanceGameCategoryButton/BalanceGameCategoryButton';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';

const meta: Meta<typeof BalanceGameCategoryButton> = {
  title: 'atoms/BalanceGameCategoryButton',
  component: BalanceGameCategoryButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: { type: 'text' } },
    icon: {
      control: {
        type: 'select',
        options: ['Popular', 'Couple', 'Taste', 'Worldcup'],
      },
    },
    active: { control: { type: 'boolean' } },
    badgeText: { control: { type: 'text' } },
    onClick: { action: 'onClick' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const icons = {
  Popular: <Popular />,
  Couple: <Couple />,
  Taste: <Taste />,
  Worldcup: <Worldcup />,
};

export const Default: Story = {
  args: {
    label: '인기',
    icon: icons.Popular,
    active: false,
    badgeText: '화제의 중심',
  },
};

export const All: Story = {
  render: (args) => {
    const [activeTab, setActiveTab] = useState('Popular');

    const getBadgeText = (label: string) => {
      switch (label) {
        case 'Popular':
          return '화제의 중심';
        case 'Couple':
          return '인기 급상승';
        case 'Taste':
          return '나만의 취향';
        case 'Worldcup':
          return '뜨거운 경기';
        default:
          return '';
      }
    };

    return (
      <ul css={storyContainer}>
        <li css={storyInnerContainer}>
          <h1>인기</h1>
          <BalanceGameCategoryButton
            {...args}
            label="인기"
            icon={icons.Popular}
            active={activeTab === 'Popular'}
            badgeText={getBadgeText('Popular')}
            onClick={() => setActiveTab('Popular')}
          />
        </li>

        <li css={storyInnerContainer}>
          <h1>커플</h1>
          <BalanceGameCategoryButton
            {...args}
            label="커플"
            icon={icons.Couple}
            active={activeTab === 'Couple'}
            badgeText={getBadgeText('Couple')}
            onClick={() => setActiveTab('Couple')}
          />
        </li>

        <li css={storyInnerContainer}>
          <h1>취향</h1>
          <BalanceGameCategoryButton
            {...args}
            label="취향"
            icon={icons.Taste}
            active={activeTab === 'Taste'}
            badgeText={getBadgeText('Taste')}
            onClick={() => setActiveTab('Taste')}
          />
        </li>

        <li css={storyInnerContainer}>
          <h1>월드컵</h1>
          <BalanceGameCategoryButton
            {...args}
            label="월드컵"
            icon={icons.Worldcup}
            active={activeTab === 'Worldcup'}
            badgeText={getBadgeText('Worldcup')}
            onClick={() => setActiveTab('Worldcup')}
          />
        </li>
      </ul>
    );
  },
};
