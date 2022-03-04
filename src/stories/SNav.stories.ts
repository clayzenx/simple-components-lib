import { Story, Meta } from '@storybook/web-components';
import { SNav as Nav, SNavProps } from './SNav';

export default {
  title: 'Simple/Nav',
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['row', 'column'],
    },
  }

} as Meta

const Template: Story<Partial<SNavProps>> = (args) => Nav(args);

export const SNav = Template.bind({});
SNav.args = {
  "direction": "row",
};


