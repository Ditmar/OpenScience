import React from 'react';
import './HomePage.scss';
import FeaturedArticle from '../../molecules/featured-article/FeaturedArticle';
import ArticlePublish from '../../molecules/article-publish/ArticlePublish';
import LabelFeaturedArticles from '../../atoms/label-featured-articles/LabelFeaturedArticles';
import LabelDate from '../../atoms/label-date/LabelDate';
import ArticleTitle from '../../atoms/article-title/ArticleTitle';
import ArticleDescription from '../../atoms/article-description/ArticleDescription';
import AuthorLabel from '../../atoms/Author-Label/AuthorLabel';
import VariableButton from '../../atoms/variable-button/VariableButton';
import PointsDivider from '../../atoms/points-divider/PointsDivider';
import PublishButton from '../../atoms/publish-button/PublishButton';
import IconUpload from '../../atoms/icon-upload/IconUpload';
import PdfIcon from '../../../../assets/icons/pdf.svg?raw';
import LinkIcon from '../../../../assets/icons/share.svg?raw';
import icon_upload_primary from '../../../../assets/icons/icon-upload-primary.svg?raw';
import dataMock from './__mock__/datamock.json';

function HomePage() {
  return (
    <div className="home-page">
      <div className="featured-articles-container">
        <div className="featured-articles-column">
          {dataMock.data.slice(0, 2).map(({ id, attributes }) => (
            <React.Fragment key={id}>
              <FeaturedArticle>
                <div className="featured-article__content">
                  <div className="featured-article__text">
                    <LabelFeaturedArticles text="ARTÍCULOS DESTACADOS" ColorVariant="main" />
                    <LabelDate date={new Date(attributes.date)} />
                    <ArticleTitle title={attributes.title} variant="default" />
                    <ArticleDescription
                      article="Spectral study the visual ecology of pelagic sharks with secondarily expanded habitats."
                      variant="default"
                    />
                    <div className="divider">
                      <AuthorLabel variant="Marco Antonio Lopez" />
                      <div className="buttons">
                        <VariableButton icon={PdfIcon} />
                        <VariableButton icon={LinkIcon} />
                      </div>
                    </div>
                  </div>
                </div>
              </FeaturedArticle>
              <PointsDivider color="secondary" size="small" variant="solid-line" />
              <PointsDivider color="primary" size="medium" variant="points" />
            </React.Fragment>
          ))}
          <ArticlePublish>
            <PublishButton variant="primary">PUBLICAR ARTICULO</PublishButton>
            <IconUpload icon={icon_upload_primary} />
          </ArticlePublish>
        </div>
        <div className="thumbnail-column">
          <img
            className="image"
            src={dataMock.data[0].attributes.portrait.data.attributes.url}
            alt={`Thumbnail for ${dataMock.data[0].attributes.title}`}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
