import { Story, Meta } from '@storybook/web-components';
import { SButton, SButtonProps } from './SButton';

export default {
  title: 'Simple/Button',
} as Meta;

const Template: Story<Partial<SButtonProps>> = (args) => SButton(args);

export const Base = Template.bind({});
Base.args = {
  label: 'Button',
};

