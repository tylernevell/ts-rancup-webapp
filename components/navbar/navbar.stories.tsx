import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NavBar } from './navbar';

export default {
  title: 'Components/NavBar',
  component: NavBar,
  argTypes: {},
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar />;

export const RancUpNavBar = Template.bind({});
RancUpNavBar.args = {};
