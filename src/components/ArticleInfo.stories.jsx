import React from 'react';
import ArticleInfo from './ArticleInfo';

export default {
  title: 'Atoms/ArticleInfo',
  component: ArticleInfo,
};

const Template = (args) => <ArticleInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
  date: '2024-06-13',
  volume: '42',
};

export const CustomDateAndVolume = Template.bind({});
CustomDateAndVolume.args = {
  date: '2023-12-01',
  volume: '100',
};
