import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UserRankingListItem } from './user-ranking';

export default {
  title: 'Components/UserRankingListItem',
  component: UserRankingListItem,
  argTypes: {
    ranking: {
      control: {
        type: 'range',
        min: 1,
        max: 10,
        step: 1,
      }
    }
  },
} as ComponentMeta<typeof UserRankingListItem>;

const Template: ComponentStory<typeof UserRankingListItem> = (args) => (
  <UserRankingListItem {...args} />
);

export const RancUserRankingListItem = Template.bind({});
RancUserRankingListItem.args = {};