import type { IProps } from './types/iprops';
import styles from './DisplayAndSubTitle.module.scss';

function DisplayAndSubtitle(props: IProps) {
  const {
    displayText,
    subtitle,
    displayTag: DisplayTag = 'h1',
    subtitleTag: SubtitleTag = 'h2',
    size = 'lg',
    weight = 'regular',
    alignment = 'left',
    spacing = 'default',
  } = props;
  return (
    <div className={`${styles['display-and-subtitle']} ${styles[alignment]}`}>
      <DisplayTag
        className={`${styles['display-title']} ${styles[size]} ${styles[weight]} ${styles[spacing]}`}
      >
        {displayText}
      </DisplayTag>
      {subtitle && (
        <SubtitleTag className={`${styles['display-subtitle']} ${styles[size]}`}>
          {subtitle}
        </SubtitleTag>
      )}
    </div>
  );
}

export default DisplayAndSubtitle;
