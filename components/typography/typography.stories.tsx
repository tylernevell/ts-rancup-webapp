import { Meta, Story } from '@storybook/react';
import { Typography } from './typography';
import type { PropsType } from './types';

export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {},
} as Meta;

export const Text: Story<PropsType> = (args) => <Typography {...args} />;
