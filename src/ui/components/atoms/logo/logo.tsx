import './style.scss';
import type { IProps } from './types/IProps';

function Logo(props: IProps) {
  const { src, alt, variant = 'primary' } = props;
  const color = `logo-container--${variant}`;

  return (
    <header className={`logo-container ${color}`}>
      <div>
        <img src={src} alt={alt} className="logo-image" />
      </div>
      <div />
    </header>
  );
}

export default Logo;