import React, { useEffect, useRef } from 'react';
import Glide from '@glidejs/glide';
import LabelVolumes from '../../atoms/label-volumes/LabelVolumes';
import LabelArticles from '../../atoms/label-articles/LabelArticles';
import type { CarouselProps } from './types/CarouselProps';

function Carousel({ volumes }: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      const glide = new Glide(carouselRef.current, {
        type: 'carousel',
        startAt: 0,
        perView: 4,
        autoplay: 3000,
      });

      glide.mount();

      // Cleanup function
      return () => {
        glide.destroy();
      };
    }

    // If carouselRef.current is null, return undefined explicitly
    return undefined;
  }, [volumes]);

  if (volumes.length === 0) {
    return <div className="carousel__error">Please try again later.</div>;
  }

  return (
    <div className="carousel" ref={carouselRef}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {volumes.map((volume) => (
            <li key={volume.id} className="glide__slide">
              <LabelArticles variant="default">{volume.date}</LabelArticles>
              <LabelVolumes text={volume.name} />
            </li>
          ))}
        </ul>
      </div>
      <div className="glide__arrows" data-glide-el="controls">
        <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
          &lt;
        </button>
        <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Carousel;
