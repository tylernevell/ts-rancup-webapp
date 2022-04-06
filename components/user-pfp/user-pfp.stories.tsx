import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UserProfilePic } from './user-pfp';

export default {
  title: 'Components/UserProfilePic',
  component: UserProfilePic,
  argTypes: {},
} as ComponentMeta<typeof UserProfilePic>;

const Template: ComponentStory<typeof UserProfilePic> = (args) => (
  <UserProfilePic />
);

export const RancUserProfilePic = Template.bind({});
RancUserProfilePic.args = {};
