import Breadcrumbs from './Breadcrumbs.astro';
import { breadcrumbsMock } from '../mocks/mockData.js';
export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
};
const Template = (args) => ({
  Component: Breadcrumbs,
  props: args,
});
export const Default = Template.bind({});
Default.args = {
  breadcrumbs: breadcrumbsMock,
};
