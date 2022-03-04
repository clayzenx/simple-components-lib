import { Story, Meta } from '@storybook/web-components';
import { SAccordion as Accordion } from './SAccordion';

export default {
  title: 'Simple/Accordion',
} as Meta

const Template: Story = () => Accordion();

export const SAccordion = Template.bind({});
SAccordion.args = {};


