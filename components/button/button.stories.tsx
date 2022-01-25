import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Button } from './button';

const Block: React.VoidFunctionComponent = () => <h1>WIP</h1>;
export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Block>;

export const Basic = {
  args: {},
  parameters: {},
};
