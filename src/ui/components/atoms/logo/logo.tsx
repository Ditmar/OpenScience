import './style.scss';
import type { IProps } from './types/IProps';

function Logo(props: IProps) {
  const { src, alt, children, variant = 'primary', icon } = props;
  const color = `logo-container--${variant}`;

  return (
    <header className={`logo-container ${color}`}>
      <div>
        {icon && <img src={icon} alt="Icon" />}
        <img src={src} alt={alt} className="logo-image" />
        {children}
      </div>
      <div />
    </header>
  );
}
export default Logo;
