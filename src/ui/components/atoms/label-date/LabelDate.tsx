import type { IProps } from './types/IProps';
import './LabelDate.scss';

function LabelDate(props: IProps) {
  const { month, day, year, color = 'primary' } = props;
  const colorText = `label-date--${color}`;

  return (
    <span
      className={`label-date ${colorText}`}
    >{`${month} ${day.toString()} | ${year.toString()}`}</span>
  );
}

export default LabelDate;
