import './styles.scss';
import type { IProps } from './types/IProps';

const colorClassNames: Record<string, string> = {
  main: 'variables--main',
  secondary: 'variables--secondary',
  default: 'variables--primary',
};

function Variables({ text = 'ARTICULOS', colorVariant = 'primary', href }: IProps) {
  const className = colorClassNames[colorVariant] || colorClassNames.default;

  return (
    <div className={`variables ${className}`}>
      {href ? (
        <a href={href} className="variables__articulos">
          {text}
        </a>
      ) : (
        <span className="variables__articulos">{text}</span>
      )}
    </div>
  );
}

export default Variables;
