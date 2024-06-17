import './variableButton.scss';
import type { IProps } from './types/IProps';

function VariableButton({ icon, onClick }: IProps) {
  return (
    <button className="variable-button" aria-label="Abrir" onClick={onClick}>
      <span
        className="button-icon"
        data-testid="button-icon"
        dangerouslySetInnerHTML={{ __html: icon ?? '<div></div>' }}
      />
    </button>
  );
}

export default VariableButton;
