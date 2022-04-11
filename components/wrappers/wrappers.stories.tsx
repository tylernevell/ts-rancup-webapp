import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RankingsTable } from '../rankings-table/rankings-table';
import { CenterWrapper } from './center-wrapper';

export default {
  title: 'Components/CenterWrapper',
  component: CenterWrapper,
  argTypes: {},
} as ComponentMeta<typeof CenterWrapper>;

const Template: ComponentStory<typeof CenterWrapper> = (args) => (
  <CenterWrapper>
    <RankingsTable />
  </CenterWrapper>
);

export const RancUpCenterWrapper = Template.bind({});
RancUpCenterWrapper.args = {};
