import { Story, Meta } from '@storybook/react';
import BurgerButton from './BurgerButton';

export default {
  title: 'ui/components/atoms/BurgerButton',
  component: BurgerButton,
} as Meta;

const Template: Story = (args) => <BurgerButton {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Hover = Template.bind({});
Hover.args = {};

export const Active = Template.bind({});
Active.args = {};
