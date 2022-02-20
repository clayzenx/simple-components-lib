import { Story, Meta } from '@storybook/web-components';
import { SNav as Nav, SNavProps } from './SNav';

export default {
  title: 'Simple/Nav',
} as Meta

const Template: Story<Partial<SNavProps>> = (args) => Nav(args);

export const SNav = Template.bind({});
SNav.args = {
  "navItem": "slot[nav-item]",
  "direction": "row",
  id: 1
};


