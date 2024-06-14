// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import type { SvgIconProps } from './types/SvgIconProps';
import optimizeSvg from './optimizeSvg';

export function Icon(props: SvgIconProps) {
  const { src, size, className, styles } = props;
  const optimizedSvg = optimizeSvg(src, size);

  const spanProps: Record<string, unknown> = {
    dangerouslySetInnerHTML: { __html: optimizedSvg },
  };

  if (className) {
    spanProps.className = className;
  }

  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  if (size || styles) {
    spanProps.style = { width: size, height: size, ...styles };
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <span {...spanProps} />;
}

Icon.propTypes = {
  src: PropTypes.string.isRequired,
};
