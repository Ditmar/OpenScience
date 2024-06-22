import type { IProps } from './types/IProps.js';
import './FeaturedArticle.scss';
import { Icon } from '../../../utils/svg-icons/icons';

function FeaturedArticle(props: IProps) {
  const { children, icon, color } = props;
  const colorFont = `variable--${color as string}`;

  return (
    <div className="featured-article">
      <span className="featured-article__text">{children}</span>
      <div className={`featured-article__box ${colorFont}`}>
        {icon && <Icon src={icon} className="featured-article__icon" />}
      </div>
    </div>
  );
}
export default FeaturedArticle;
