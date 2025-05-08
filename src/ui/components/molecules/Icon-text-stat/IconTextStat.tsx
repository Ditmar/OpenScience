import type { IProps } from './types/IProps';
import style from './IconTextStat.module.scss';

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

  return (
    <div
      className={`
        ${style[`icon-text-stat`]} 
        ${variant ? style[variant] : ''} 
        ${size ? style[size] : ''} 
        ${border ? style[border] : ''} 
        ${className ?? ''}`}
    >
      {children && <div className={style[`icon-text-stat__checkbox`]}>{children}</div>}

      {icon && (
        <div className={`${style[`icon-text-stat__icon`]} ${variant ? style[variant] : ''}`}>
          {icon}
        </div>
      )}

      <div className={`${style[`icon-text-stat__text`]} ${size ? style[size] : ''}`}>
        <h4 className={`${style[`icon-text-stat__title`]} ${size ? style[size] : ''}`}>{title}</h4>
        <div className={style[`icon-text-stat__main`]}>{mainValue}</div>
        {subValue && <div className={style[`icon-text-stat__sub`]}>{subValue}</div>}
        {description && <div className={style[`icon-text-stat__desc`]}>{description}</div>}
      </div>
    </div>
  );
}

export default IconTextStat;
