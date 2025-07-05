import React from 'react';
import LabelDate from '../../atoms/label-date/LabelDate';
import ArticleTitle from '../../atoms/article-title/ArticleTitle';
import ArticleDescription from '../../atoms/article-description/ArticleDescription';
import AuthorLabel from '../../atoms/Author-Label/AuthorLabel';
import PointsDivider from '../../atoms/points-divider/PointsDivider';
import PdfIcon from '../../../../assets/icons/pdf.svg?raw';
import LinkIcon from '../../../../assets/icons/share.svg?raw';
import VariableButton from '../../atoms/variable-button/VariableButton';
import type { IProps } from './IProps/IProps';
import {
  ArticleDescriptionWrapper,
  ArticleTitleWrapper,
  ArticleWrapper,
  AuthorWrapper,
  ButtonsWrapper,
  DateWrapper,
  Divider,
} from './Recent-Article-Card.styles';

function RecentArticleCard({ date, title, description, author, pdfUrl, shareUrl }: IProps) {
  return (
    <ArticleWrapper>
      <DateWrapper>
        <LabelDate date={date} />
      </DateWrapper>

      <ArticleTitleWrapper>
        <ArticleTitle title={title} variant="default" />
      </ArticleTitleWrapper>

      <ArticleDescriptionWrapper>
        <ArticleDescription article={description} variant="default" />
      </ArticleDescriptionWrapper>

      <Divider>
        <AuthorWrapper>
          <AuthorLabel variant={author} />
        </AuthorWrapper>
        <ButtonsWrapper>
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
        </ButtonsWrapper>
      </Divider>

      <PointsDivider color="tertiary" size="medium" variant="solid-line" />
    </ArticleWrapper>
  );
}

export default RecentArticleCard;
