import './styles.scss';
import type { IProps } from './types/IProps';

function Thumbnail(props: IProps) {
  const { pathImage, alt } = props;

  return (
    <div className="thumbnail">
      <img src={pathImage} alt={alt} className="thumbnail" />
      <div className="overlay" aria-label="overlay">
        {' '}
      </div>
    </div>
  );
}

export default Thumbnail;
