import './styles.scss';
import type { IProps } from './types/IProps';

function LogoFooter(props: IProps) {
  const { icon, color } = props;
  const colorFont = `logo--${color as string}`;

  return (
    <div className={`logo ${colorFont}`}>
      <span
        data-testid="logo_icon"
        className="logo-icon"
        dangerouslySetInnerHTML={{ __html: icon ?? '<div></div>' }}
      />
    </div>
  );
}
export default LogoFooter;
