import { Story, Meta } from '@storybook/web-components';
import { SAccordion as Accordion, SAccordionProps } from './SAccordion';

export default {
  title: 'Simple/Accordion',
} as Meta

const Template: Story<Partial<SAccordionProps>> = (args) => Accordion(args);

export const SAccordion = Template.bind({});
SAccordion.args = {
  "summary": "slot[summary]",
  "content": "slot[content]",
};


