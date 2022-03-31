import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RankingsTable } from './rankings-table';

export default {
  title: 'Components/Rankings/RankingsTable',
  component: RankingsTable,
  argTypes: {},
} as ComponentMeta<typeof RankingsTable>;

const Template: ComponentStory<typeof RankingsTable> = (args) => (
  <RankingsTable />
);

export const RancUpRankingsTable = Template.bind({});
RancUpRankingsTable.args = {};
