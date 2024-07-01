import type { IProps } from './types/IProps';
import './NavigationRoute.scss';

function NavigationRoute({ color = 'primary', volume, date, text }: IProps) {
  return (
    <div className={`volume-box ${color}`}>
      <p>
        {date} | Vol. {volume} <span className="nu-text">| Nu. 1</span>
      </p>
      {text && <p>{text}</p>}
    </div>
  );
}

export default NavigationRoute;
