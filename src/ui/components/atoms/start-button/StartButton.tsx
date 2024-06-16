import type { IProps } from './types/IProps';
import './StartButton.scss';

function StartButton(props: IProps) {
  const { children, icon, varianButton = 'primary' } = props;
  const button = `button__init--${varianButton}`;

  return (
    <button className={`button__init ${button}`}>
      <span>{children}</span>
      <span
        className="button__icon--before"
        dangerouslySetInnerHTML={{ __html: icon ?? '<div></div>' }}
      />
    </button>
  );
}

export default StartButton;
