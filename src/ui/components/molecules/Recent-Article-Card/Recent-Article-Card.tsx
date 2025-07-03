import React from 'react';
import LabelDate from '../../atoms/label-date/LabelDate';
import ArticleTitle from '../../atoms/article-title/ArticleTitle';
import ArticleDescription from '../../atoms/article-description/ArticleDescription';
import AuthorLabel from '../../atoms/Author-Label/AuthorLabel';
import PointsDivider from '../../atoms/points-divider/PointsDivider';
import PdfIcon from '../../../../assets/icons/pdf.svg?raw';
import LinkIcon from '../../../../assets/icons/share.svg?raw';
import VariableButton from '../../atoms/variable-button/VariableButton';
import './styles.scss';
import type { IProps } from './IProps/IProps';

function RecentArticleCard({ date, title, description, author, pdfUrl, shareUrl }: IProps) {
  return (
    <div className="article">
      <div className="date">
        <LabelDate date={date} />
      </div>
      <div className="article-title">
        <ArticleTitle title={title} variant="default" />
      </div>
      <div className="article-description">
        <ArticleDescription article={description} variant="default" />
      </div>
      <div className="divider">
        <div className="autor">
          <AuthorLabel variant={author} />
        </div>
        <div className="buttons">
          {pdfUrl && (
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer" aria-label="Descargar PDF">
              <VariableButton icon={PdfIcon} />
            </a>
          )}
          {shareUrl && (
            <a
              href={shareUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Compartir artículo"
            >
              <VariableButton icon={LinkIcon} />
            </a>
          )}
        </div>
      </div>
      <div>
        <PointsDivider color="tertiary" size="medium" variant="solid-line" />
      </div>
    </div>
  );
}

export default RecentArticleCard;
