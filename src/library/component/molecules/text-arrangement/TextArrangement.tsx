import type { IProps } from './types/IProps';
import styles from './TextArrangement.module.scss';

import TextTitle from '../../atoms/text-title/TextTitle';
import TextContent from '../../atoms/text-content/TextContent';
import OLItem from '../../../../ui/components/atoms/ol-item/OLItem';

function TextArrangement(props: IProps) {
  const {
    titleSize = 'md',
    layout = 'standard',
    alignment = 'left',
    titleSpacing = 'default',
    contentSpacing = 'default',
    contentSize = 'md',
    showBadge = false,
    content,
    responsive = false,
    className = '',
    children,
  } = props;
  return (
    <div
      className={[
        styles.container,
        styles[layout],
        styles[`align-${alignment}`],
        responsive ? styles.responsive : '',
        titleSize === 'lg' ? styles['large-title'] : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {showBadge && (
        <div className={styles.badgeWrapper}>
          <OLItem value={1} active key={1} shape="circle" size="sm" />
        </div>
      )}
      <div className={styles.textWrapper}>
        <TextTitle text={content.title} size={titleSize} spacing={titleSpacing} />
        <TextContent text={content.text} size={contentSize} spacing={contentSpacing} />
        {children}
      </div>
    </div>
  );
}

export default TextArrangement;
