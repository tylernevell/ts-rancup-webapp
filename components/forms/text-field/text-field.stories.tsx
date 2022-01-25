import { ComponentMeta } from '@storybook/react';
import { TextField } from './text-field';

const TextFieldExample = () => {
  const onChange = () => {};
  return (
    <TextField
      onChange={onChange}
      placeholder="Test Placeholder"
      type="email"
      label="Email"
    />
  );
};
export default {
  title: 'Components/Forms/TextField',
  component: TextFieldExample,
} as ComponentMeta<typeof TextField>;

export const Basic = {
  args: {},
  parameters: {
    design: { type: 'figma', url: '' },
    status: { type: 'wip' },
  },
};
