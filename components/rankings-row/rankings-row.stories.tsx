import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RankingsRow } from './rankings-row';

export default {
  title: 'Components/Rankings/RankingsRow',
  component: RankingsRow,
  argTypes: {},
} as ComponentMeta<typeof RankingsRow>;

const Template: ComponentStory<typeof RankingsRow> = (args) => <></>;

export const RancUpRankingsRow = Template.bind({});
RancUpRankingsRow.args = {};
