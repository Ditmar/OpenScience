import classNames from 'classnames';
import ArticleTitle from '../../../../ui/components/atoms/article-title/ArticleTitle';
import ArticleDescription from '../../../../ui/components/atoms/article-description/ArticleDescription';
import OlItem from '../../../../ui/components/atoms/ol-item/OLItem';
import styles from './TextArrangement.module.scss';
import type { IProps } from './types/IProps';

function TextArrangement(props: IProps) {
  const { title, description, layout, responsive, alignment } = props;

  const containerClass = classNames(
    styles.container,
    layout && styles[`layout-${layout}`],
    responsive && styles[`responsive-${responsive}`],
  );

  const leftTitleClass = classNames(
    styles['left-title'],
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
    <div className={containerClass} data-testid="container">
      <div className={styles['left-container']}>
        <div className={leftTitleClass}>
          <ArticleTitle title={title ?? 'Sin título'} variant="default" />
        </div>
        <div className={styles['left-description']}>
          <ArticleDescription article={description ?? 'Sin descripción'} variant="default" />
        </div>
      </div>
      <div className={styles['right-container']}>
        <div className={styles['card-right-one']}>
          <div className={rightTitleClass}>
            <ArticleTitle title={title ?? 'Sin título'} variant="default" />
          </div>
          <div className={rightDescriptionClass}>
            <ArticleDescription article={description ?? 'Sin descripción'} variant="default" />
          </div>
        </div>
        <div className={styles['card-right-two']}>
          <div className={styles['variant-two-container']}>
            <OlItem value={1} active shape="circle" size="sm" />
            <div className={styles['variant-two-content']}>
              <div className={rightTitleTwoClass}>
                <ArticleTitle title={title ?? 'Sin título'} variant="default" />
              </div>
              <div className={rightDescriptionTwoClass}>
                <ArticleDescription article={description ?? 'Sin descripción'} variant="default" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles['card-right-three']}>
          <div className={rightTitleTwoClass}>
            <ArticleTitle title={title ?? 'Sin título'} variant="default" />
          </div>
          <div className={rightDescriptionTwoClass}>
            <ArticleDescription article={description ?? 'Sin descripción'} variant="default" />
          </div>
        </div>
        <div className={styles['card-right-four']}>
          <div className={rightTitleTwoClass}>
            <ArticleTitle title={title ?? 'Sin título'} variant="default" />
          </div>
          <div className={rightDescriptionTwoClass}>
            <ArticleDescription article={description ?? 'Sin descripción'} variant="default" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextArrangement;
