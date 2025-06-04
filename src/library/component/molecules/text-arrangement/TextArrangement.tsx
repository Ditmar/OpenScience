import ArticleTitle from '../../../../ui/components/atoms/article-title/ArticleTitle';
import ArticleDescription from '../../../../ui/components/atoms/article-description/ArticleDescription';
import OlItem from '../../../../ui/components/atoms/ol-item/OLItem';
import styles from './TextArrangement.module.scss';
import type { IProps } from './types/IProps';

function classNames(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

function CardContent({
  title,
  description,
  titleClass,
  descriptionClass,
}: {
  title: string;
  description: string;
  titleClass: string;
  descriptionClass: string;
}) {
  return (
    <>
      <div className={titleClass}>
        <ArticleTitle title={title} variant="default" />
      </div>
      <div className={descriptionClass}>
        <ArticleDescription article={description} variant="default" />
      </div>
    </>
  );
}

function TextArrangement(props: IProps) {
  const {
    title = 'Sin título',
    description = 'Sin descripción',
    layout,
    responsive,
    alignment,
  } = props;

  const containerClass = classNames(
    styles.container,
    layout && styles[`layout-${layout}`],
    responsive && styles[`responsive-${responsive}`],
  );

  const leftTitleClass = classNames(
    styles['left-title'],
    alignment && styles[`alignment-${alignment}`],
  );

  const leftDescriptionClass = classNames(
    styles['left-description'],
    alignment && styles[`alignment-${alignment}`],
  );

  const rightTitleClass = classNames(
    styles['right-title'],
    alignment && styles[`alignment-${alignment}`],
  );

  const rightDescriptionClass = classNames(
    styles['right-description'],
    alignment && styles[`alignment-${alignment}`],
  );

  const rightTitleTwoClass = classNames(
    styles['right-title-two'],
    alignment && styles[`alignment-${alignment}`],
  );

  const rightDescriptionTwoClass = classNames(
    styles['right-description-two'],
    alignment && styles[`alignment-${alignment}`],
  );

  return (
    <div className={containerClass} data-testid="container-div">
      <div className={styles['left-container']}>
        <div className={leftTitleClass}>
          <ArticleTitle title={title} variant="default" data-testid="article-title" />
        </div>
        <div className={leftDescriptionClass}>
          <ArticleDescription
            article={description}
            variant="default"
            data-testid="article-description"
          />
        </div>
      </div>
      <div className={styles['right-container']}>
        <div className={styles['card-right-one']}>
          <CardContent
            title={title}
            description={description}
            titleClass={rightTitleClass}
            descriptionClass={rightDescriptionClass}
            data-testid="article-description"
          />
        </div>
        <div className={styles['card-right-two']}>
          <div className={styles['variant-two-container']}>
            <OlItem value={1} active shape="circle" size="sm" />
            <div className={styles['variant-two-content']}>
              <CardContent
                title={title}
                description={description}
                titleClass={rightTitleTwoClass}
                descriptionClass={rightDescriptionTwoClass}
                data-testid="article-description"
              />
            </div>
          </div>
        </div>
        <div className={styles['card-right-three']}>
          <CardContent
            title={title}
            description={description}
            titleClass={rightTitleTwoClass}
            descriptionClass={rightDescriptionTwoClass}
            data-testid="article-description"
          />
        </div>
        <div className={styles['card-right-four']}>
          <CardContent
            title={title}
            description={description}
            titleClass={rightTitleTwoClass}
            descriptionClass={rightDescriptionTwoClass}
            data-testid="article-description"
          />
        </div>
      </div>
    </div>
  );
}

export default TextArrangement;
