import React, { useState, useEffect } from 'react';
import type { IProps } from './types/IProps';
import './SectiontwoPage.scss';
import Thumbnail from '../../atoms/thumbnail/Thumbnail';
import breakpoints from './__mock__/breakpoints.json';

function SectiontwoPage({ backgroundImageDesktop, backgroundImageMobile, children }: IProps) {
  const [currentImage, setCurrentImage] = useState<string>(backgroundImageDesktop);

  useEffect(() => {
    const mediumBreakpoint = breakpoints.medium;

    const mediaQuery = window.matchMedia(`(max-width: ${mediumBreakpoint})`);

    const updateImage = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        setCurrentImage(backgroundImageMobile);
      } else {
        setCurrentImage(backgroundImageDesktop);
      }
    };

    updateImage(mediaQuery);

    mediaQuery.addEventListener('change', updateImage);

    return () => {
      mediaQuery.removeEventListener('change', updateImage);
    };
  }, [backgroundImageDesktop, backgroundImageMobile]);

  return (
    <div className="body">
      <div className="featured-article">{children}</div>
      <div className="image">
        <Thumbnail pathImage={currentImage} />
      </div>
    </div>
  );
}

export default SectiontwoPage;
