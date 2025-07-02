import React from 'react';
import './styles.scss';
import LabelDate from '../../atoms/label-date/LabelDate';
import ArticleTitle from '../../atoms/article-title/ArticleTitle';
import ArticleDescription from '../../atoms/article-description/ArticleDescription';
import AuthorLabel from '../../atoms/Author-Label/AuthorLabel';
import PdfShareButton from '../../molecules/pdf-share-buttons/PdfShareButton';
import Divider from '../../atoms/divider/Divider';
import Label from 'ui/components/atoms/label-recent-articles/LabelRecentsArticles';
import type { IProps } from './Props/IProps';

const RecentArticleCard: React.FC<IProps> = ({
  date,
  title,
  description,
  author,
  pdfUrl,
}) => (
  <div className="recent-article-card">
    <Label text='ARTÍCULOS MAS RECIENTES'/>
    <ArticleTitle title={title} />
    <LabelDate date={date} />
    <ArticleDescription article={description}>{description}</ArticleDescription>
    <div className="recent-article-card__footer">
      <AuthorLabel variant={author} />
      <PdfShareButton/>
    </div>
    <Divider variant="solid" />
  </div>
);

export default RecentArticleCard;