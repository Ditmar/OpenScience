import styles from './DisplayAndSubTitle.module.scss';
import type { IProps } from './types/IProps';

import Title from '../../atoms/title/Title';
import SubTitle from '../../atoms/subtitle/SubTitle';

function DisplayAndSubtitle(props: IProps) {
  const {
    title,
    subtitle,
    size = 'lg',
    weight = 'regular',
    spacing = 'default',
    alignment = 'left',
  } = props;
  return (
    <div className={`${styles['display-and-subtitle']} ${styles[alignment]}`}>
      <Title text={title} size={size} weight={weight} spacing={spacing} />
      {subtitle && <SubTitle text={subtitle} size={size} />}
    </div>
  );
}

export default DisplayAndSubtitle;
