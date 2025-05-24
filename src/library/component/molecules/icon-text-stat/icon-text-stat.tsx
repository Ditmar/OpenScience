import type { IProps } from './types/IProps';
import style from './icon-text-stat.module.scss';
import { iconMap } from './types/iconMap';

function IconTextStat(props: IProps) {
  const {
    title,
    mainValue,
    subValue,
    variant,
    size,
    border,
    icon,
    description,
    className,
    children,
  } = props;

  const IconComponent = icon ? iconMap[icon] : null;

  return (
    <div
      className={`
        ${style[`icon-text-stat`]} 
        ${variant ? style[variant] : ''} 
        ${size ? style[size] : ''} 
        ${border ? style[border] : ''} 
        ${className ?? ''}`}
    >
      {children && <div className={style[`icon-text-stat-checkbox`]}>{children}</div>}

      {IconComponent && (
        <div className={`${style['icon-text-stat-icon']} ${variant ? style[variant] : ''}`}>
          <IconComponent />
        </div>
      )}

      <div className={`${style[`icon-text-stat-text`]} ${size ? style[size] : ''}`}>
        <h4 className={`${style[`icon-text-stat-title`]} ${size ? style[size] : ''}`}>{title}</h4>
        <div className={style[`icon-text-stat-main-value`]}>{mainValue}</div>
        {subValue && <div className={style[`icon-text-stat-sub-value`]}>{subValue}</div>}
        {description && <div className={style[`icon-text-stat-description`]}>{description}</div>}
      </div>
    </div>
  );
}

export default IconTextStat;
