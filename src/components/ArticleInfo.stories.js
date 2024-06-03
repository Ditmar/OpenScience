import ArticleInfo from './ArticleInfo.astro';

export default {
  title: 'Components/ArticleInfo',
  component: ArticleInfo,
};

const Template = (args) => ({
  Component: ArticleInfo,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  date: '2024-05-26',
  volumeNumber: '42',
};
