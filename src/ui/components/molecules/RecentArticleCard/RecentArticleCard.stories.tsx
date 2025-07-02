import React from 'react';
import RecentArticleCard from './RecentArticleCard';

export default {
  title: 'Molecules/RecentArticleCard',
  component: RecentArticleCard,
};

export const Default = () => (
  <RecentArticleCard
    date={new Date()}
    title="Título de ejemplo"
    description="Descripción de ejemplo para el artículo."
    author="Autor Ejemplo"
    pdfUrl="https://example.com/articulo.pdf"
  />
);