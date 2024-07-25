import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { storyContainer, storyInnerContainer } from '@/stories/story.styles';
import GameCard from '@/components/molecules/GameCard/GameCard';

const meta = {
  title: 'molecules/GameCard',
  component: GameCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: { type: 'text' } },
    description: { control: { type: 'text' } },
    isLoading: { control: { type: 'boolean' } },
    imgUrl: { control: { type: 'object' } },
  },
  args: {
    title: '남자 아이돌 이상형 월드컵 ( 총 256명 )',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. ',
    isLoading: false,
    imgUrl: [
      'https://s3-alpha-sig.figma.com/img/6aa2/034c/9af71d672d0d57f2a7f283b0ba43c2ab?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m5hBGg8Ykfy3PlpcTqtyHhpVbwJdnkgP8BjZ-J34AFqbk5C3lnVEA8TRqTrrJQt20viZS0RvGVzYf84g4g7oOu4dTvtgd7iCnBFVYR3HM172wFEBoX6BAQaeXbOWiRJhscqjev7jszg9S5i-AkEyzKh~ip-V6pqMo~3VTcP6rKU8RPdfKoGX0wqrvlvbU8i-msc0p-Z47tl89QtGltjchLrJ5O9spvdwB8knCppfGSoBY1FyAxO6v60siwhE4jTbTCul2M1P-j4R8hbbuULOGtExfvvjqzxv07GkjZulDLa887al5w1sWxg3wtOpv1NfY3mwzDUnpZJkkwnd0D-Axw__',
      'https://s3-alpha-sig.figma.com/img/36e8/1245/dcc2ed4b69d391391ceb5086bfc39ce0?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=INSkyCHLLkm~Bu0zeU0lPkAvVAwwWYQcNjk0J5s2Y8ubR7FE0y5VhKZEkAZES4rZVEOQH~s90GHQ~STcRpp3SigrRhmx7YyyrNIV9pp4oPsOC1q7baeBCyHcUieaojcoOUYAler8RbwPzrTDqZLtd5VmqD7hD5D506RdSFzVPdBAjD0Mw8iAANeo3eKbjigGqdIDVGYbEOfvPB8rokaQjgCCV0Xot-GUqUvIGIfKCnyv2bxMpL75RTph68p4cWfrEp5zQGQvBoWCxDP71XirqVNpM2~kuX5pAVcwkTxX-jVljomWvRvV9RE9MnrjWXqxJQJro4GX~pAirEAy0dVjOw__',
    ],
  },
} satisfies Meta<typeof GameCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isLoading: false,
    title: '남자 아이돌 이상형 월드컵 ( 총 256명 )',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
  },
};

export const All: Story = {
  render: (args) => (
    <ul css={storyContainer}>
      <li css={storyInnerContainer}>
        <h3>One Image</h3>
        <GameCard
          {...args}
          imgUrl={[
            'https://s3-alpha-sig.figma.com/img/db58/7931/a846a5f4135961a7d4a11e5ddb50e7b9?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dr8Dp5WUufjy9dH297t1SrZHLgYkAYIrplsF7cLdd7LN-nWA2-FHrJvErdFTyhK-1G2b2Wdho1olX~w8IywWE57acUaHtV7M1t~bnzZo85YEy8bImUNUVWxjkTSVxbAQz3jshDfcxSaG~oMr5rE9HXeFoRfkz8-LjY8etIszxCJ4Sp1qnqZSD9pfHKOfx-21KES~p9RvDQ9SKlfTf~9T5Fg5GqrThnxQdqTX8XC8kh4~QjZdU6qXPg9FXlGiWMgfyfbaRwBPN8tZnqCCIWCvKEvyTHZm9NAFHMy3U1wuhYcfZi9735jdb-AJd13hJI7~INHGhhYRAyJJNrejKosXdQ__',
          ]}
          title="출근 시간 10분전에 도착하는게 기본매너일까?"
        />
        <h3>Two Image</h3>
        <GameCard {...args} />
        <h3>No Image</h3>
        <GameCard
          title="남자 아이돌 이상형 월드컵 ( 총 256명 )"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
        />
        <h3>No Image & loading</h3>
        <GameCard isLoading />
      </li>
    </ul>
  ),
};
