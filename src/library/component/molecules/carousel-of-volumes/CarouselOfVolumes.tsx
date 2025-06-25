import { useState } from 'react';
import styles from './CarouselOfVolumes.module.scss';
import LabelVolumes from '../../../../ui/components/atoms/label-volumes/LabelVolumes';
import Volumen from '../../../../ui/components/molecules/volume/Volume';
import { Icon } from '../../../../ui/utils/svg-icons/icons';
import LeftIcon from '../../../../assets/icons/left-arrow.svg?raw';
import RightIcon from '../../../../assets/icons/right-arrow.svg?raw';
import type { CarouseIProps } from './types/IProps';

import { useIsMobile } from './hooks/useIsMobile';

export function CarouselOfVolumes({ data }: CarouseIProps) {
  const [visibleItems, setVisibleItems] = useState(data.data);

  const isMobile = useIsMobile();

  const rotateRight = () => {
    const [first, ...rest] = visibleItems;
    setVisibleItems([...rest, first]);
  };

  const rotateLeft = () => {
    const last = visibleItems[visibleItems.length - 1];
    const rest = visibleItems.slice(0, -1);
    setVisibleItems([last, ...rest]);
  };

  const visibleCount = isMobile ? 1 : 3;

  return (
    <div className={styles['carousel-of-volumes']}>
      <div className={styles['carousel-title']}>
        <LabelVolumes text="VOLÚMENES" />
      </div>
      <div className={styles['carousel-container']}>
        <button
          aria-label="Volumen anterior"
          data-testid="button-left"
          className={styles['button-left']}
          onClick={rotateLeft}
        >
          <Icon src={LeftIcon} />
        </button>

        <div className={styles['carousel-items']}>
          {visibleItems.slice(0, visibleCount).map((value) => (
            <div className={styles['carousel-item']}>
              <Volumen
                id={value.id}
                pathImage={value.pathImage}
                volumen={value.volumen}
                date={new Date(value.date.toString())}
                alt={value.alt}
              />
            </div>
          ))}
        </div>

        <button
          aria-label="Volumen siguiente"
          data-testid="button-right"
          className={styles['button-right']}
          onClick={rotateRight}
        >
          <Icon src={RightIcon} />
        </button>
      </div>
    </div>
  );
}
