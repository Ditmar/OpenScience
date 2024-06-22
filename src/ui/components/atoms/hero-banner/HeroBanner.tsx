import './styles.scss';
import type { IProps } from './types/IProps';

function HeroBanner(props: IProps) {
  const { backgroundImage, alt, children, className } = props;

  return (
    <div className="hero-banner">
      <img src={backgroundImage} alt={alt} />
      <div className="overlay">
        <div className={className}>{children}</div>
      </div>
    </div>
  );
}

export default HeroBanner;
