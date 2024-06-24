import type { IProps } from './types/IProps';
import './SidePanel.scss';

function SidePanel(props: IProps) {
  const { children } = props;

  return <div className="side-panel">{children}</div>;
}

export default SidePanel;
