import { Story, Meta } from '@storybook/web-components';
import { SButton as Button, SButtonProps } from './SButton';

export default {
  title: 'Simple/Button',
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['button', 'link', 'toggle'],
    },

  } as Meta
}

const Template: Story<Partial<SButtonProps>> = (args) => Button(args);

export const SButton = Template.bind({});
SButton.args = {
  slot: 'button',
  type: 'button'
};
export const SLink = Template.bind({});
SLink.args = {
  slot: 'link',
  type: 'link'
};
export const SToggle = Template.bind({});
SToggle.args = {
  slot: 'toggle',
  type: 'toggle'
};



