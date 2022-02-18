import { Story, Meta } from '@storybook/web-components';
import { STabs as Tabs, STabsProps } from './STabs';

export default {
  title: 'Simple/Tabs',
} as Meta

const Template: Story<Partial<STabsProps>> = (args) => Tabs(args);

export const STabs = Template.bind({});
STabs.args = {
  "tab": "slot[tab]",
  "view": "slot[view]"
};


