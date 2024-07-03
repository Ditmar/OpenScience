// @ts-expect-error: Glider may need a module; TypeScript might not recognize the default export properly.
import Glider from 'glider-js';
import { useEffect, useRef } from 'react';
import type { IProps } from './types/IProps';
import 'glider-js/glider.min.css';
import styles from './VolumeCarousel.module.scss';
import { Icon } from '../../../utils/svg-icons/icons';

function VolumeCarousel(props: IProps) {
  const { children, rightIcon, leftIcon } = props;
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, no-new
      new Glider(carouselRef.current, {
        slidesToShow: 3,
        slidesToScroll: 3,
        draggable: false,
        arrows: {
          prev: `.${styles.carousel__prev}`,
          next: `.${styles.carousel__next}`,
        },
      });
    }
  }, []);

  return (
    <div className={styles.carousel__container}>
      <button type="button" className={styles.carousel__prev} aria-label="Previous">
        {leftIcon && (
          <Icon data-testid="button-icon" src={leftIcon} className={styles.button__icon} />
        )}
      </button>
      <div className={styles.carousel__list} ref={carouselRef}>
        {children}
      </div>
      <button type="button" className={styles.carousel__next} aria-label="Next">
        {rightIcon && (
          <Icon data-testid="button-icon" src={rightIcon} className={styles.button__icon} />
        )}
      </button>
    </div>
  );
}

export default VolumeCarousel;
