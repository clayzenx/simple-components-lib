import { Story, Meta } from '@storybook/web-components';
import { SRepoCard as RepoCard } from './SRepoCard';

export default {
  title: 'Simple/RepoCard',
} as Meta

const Template: Story = () => RepoCard();

export const SRepoCard = Template.bind({});
SRepoCard.args = {};

