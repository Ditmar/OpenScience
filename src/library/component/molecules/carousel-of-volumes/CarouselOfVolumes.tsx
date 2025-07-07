import { useState } from 'react';
import LabelVolumes from '../../../../ui/components/atoms/label-volumes/LabelVolumes';
import Volumen from '../../../../ui/components/molecules/volume/Volume';
import { Icon } from '../../../../ui/utils/svg-icons/icons';
import LeftIcon from '../../../../assets/icons/left-arrow.svg?raw';
import RightIcon from '../../../../assets/icons/right-arrow.svg?raw';
import type { CarouseIProps } from './types/IProps';

import { useIsMobile } from './hooks/useIsMobile';

import {
  CarouselWrapper,
  CarouselTitle,
  CarouselContainer,
  CarouselItems,
  CarouselItem,
  ButtonBase,
} from './CarouselOfVolumes.styles';

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
    <CarouselWrapper>
      <CarouselTitle>
        <LabelVolumes text="VOLÚMENES" />
      </CarouselTitle>

      <CarouselContainer>
        <ButtonBase aria-label="Volumen anterior" data-testid="button-left" onClick={rotateLeft}>
          <Icon src={LeftIcon} />
        </ButtonBase>

        <CarouselItems>
          {visibleItems.slice(0, visibleCount).map((value) => (
            <CarouselItem key={value.id}>
              <Volumen
                id={value.id}
                pathImage={value.pathImage}
                volumen={value.volumen}
                date={new Date(value.date.toString())}
                alt={value.alt}
              />
            </CarouselItem>
          ))}
        </CarouselItems>

        <ButtonBase aria-label="Volumen siguiente" data-testid="button-right" onClick={rotateRight}>
          <Icon src={RightIcon} />
        </ButtonBase>
      </CarouselContainer>
    </CarouselWrapper>
  );
}
