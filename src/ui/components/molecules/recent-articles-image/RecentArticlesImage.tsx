import type { IProps } from './types/IProps.js';
import './styles.scss';
import Rectangle29 from '../../atoms/thumbnail/__mock__/imgs/Rectangle29.png';
import Thumbnail from '../../atoms/thumbnail/Thumbnail';

function RecentArticlesImage(props: IProps) {
  const { children } = props;
  return (
    <div className="body">
      <div className="featured-article">{children}</div>
      <div className="image">
        <Thumbnail
          pathImage={
            (typeof Rectangle29 === 'object' && 'default' in Rectangle29
              ? Rectangle29.default
              : Rectangle29) as string
          }
        />
      </div>
    </div>
  );
}

export default RecentArticlesImage;
