import './style.scss';
import type { IProps } from './types/IProps';

function Logo(props: IProps) {
  const { src, alt, children, variant = 'primary', icon } = props;
  const color = `logo-image--${variant}`;
  return (
    <header className={`logo-image ${color}`}>
      <div className="logo-container">
        {icon && <img src={icon} alt="Icon" />}
        <img src={src} alt={alt} className="logo-image" />
        {children}
      </div>
      <div className="blue-section" />
    </header>
  );
}

export default Logo;
