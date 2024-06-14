import type { IProps } from './types/IProps';
import './LabelRecentsArticles.scss';

function LabelRecentsArticles(props: IProps) {
  const { text, color = 'primary' } = props;
  const colorText = `label-recents-articles--${color}`;

  return (
    <div className={`label-recents-articles ${colorText}`}>
      <span>{text}</span>
    </div>
  );
}

export default LabelRecentsArticles;
