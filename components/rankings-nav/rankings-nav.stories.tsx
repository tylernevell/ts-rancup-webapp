import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RankingsNav } from './rankings-nav';

export default {
  title: 'Components/RankingsNav',
  component: RankingsNav,
  argTypes: {},
} as ComponentMeta<typeof RankingsNav>;

const Template: ComponentStory<typeof RankingsNav> = (args) => <RankingsNav />;

export const RancUpRankingsNav = Template.bind({});
RancUpRankingsNav.args = {};
