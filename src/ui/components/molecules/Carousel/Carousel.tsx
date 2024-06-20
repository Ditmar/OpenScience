import React, { useState, useEffect } from 'react';

import LabelVolumes from '../../atoms/label-volumes/LabelVolumes';

import LabelArticles from '../../atoms/label-articles/LabelArticles';

import type { CarouselProps } from './types/CarouselProps';

function Carousel({ volumes }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (volumes.length === 0) {
      setError('Please try again later.');
    } else {
      setError(null);
    }
  }, [volumes]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % volumes.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + volumes.length) % volumes.length);
  };

  if (error) {
    return <div className="carousel__error">{error}</div>;
  }

  return (
    <div className="carousel">
      <button
        className="carousel__nav carousel__nav--prev"
        onClick={handlePrev}
        aria-label="Previous"
      >
        &lt;
      </button>
      <div className="carousel__items">
        {volumes.slice(currentIndex, currentIndex + 4).map((volume) => (
          <div key={volume.id} className="carousel__item">
            <LabelArticles variant="default">{volume.date}</LabelArticles>
            <LabelVolumes text={volume.name} />
          </div>
        ))}
      </div>
      <button className="carousel__nav carousel__nav--next" onClick={handleNext} aria-label="Next">
        &gt;
      </button>
    </div>
  );
}

export default Carousel;
