import { Story, Meta } from '@storybook/web-components';
import { SDetails as Details, SDetailsProps } from './SDetails';

export default {
  title: 'Simple/Details',
} as Meta

const Template: Story<Partial<SDetailsProps>> = (args) => Details(args);

export const SDetails = Template.bind({});
SDetails.args = {
  "summary": "Title",
  "content": "Text content",
  "isOpen": true
};


