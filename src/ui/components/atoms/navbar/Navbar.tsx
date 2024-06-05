import './styles.scss';
import type { IProps } from './types/IProps';

function Button(props: IProps) {
  const { children, icon } = props;
  return (
    <div>
      <button className="component">
        <span
          className="component__icon-before"
          dangerouslySetInnerHTML={{ __html: icon ?? '<div></div>' }}
        />
        <span className="component__label">{children}</span>
      </button>
    </div>
  );
}
export default Button;
