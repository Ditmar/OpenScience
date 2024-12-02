import React, { useState, useEffect } from 'react';
import type { IProps } from './types/IProps';
import './SectiontwoPage.scss';
import SectiontwoImgDesktop from '../../../../assets/icons/twosectiondesktop.svg';
import SectiontwoImgMobile from '../../../../assets/icons/twoonesection.svg';
import Thumbnail from '../../atoms/thumbnail/Thumbnail';

function SectiontwoPage(props: IProps) {
  const { children } = props;

  const resolveImage = (image: unknown): string => {
    if (typeof image === 'object' && image !== null && 'default' in image) {
      return (image as { default: string }).default;
    }
    return image as string;
  };

  const desktopImage = resolveImage(SectiontwoImgDesktop);
  const mobileImage = resolveImage(SectiontwoImgMobile);

  const [currentImage, setCurrentImage] = useState<string>(desktopImage);

  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth <= 768) {
        setCurrentImage(mobileImage);
      } else {
        setCurrentImage(desktopImage);
      }
    };

    updateImage();

    window.addEventListener('resize', updateImage);

    return () => {
      window.removeEventListener('resize', updateImage);
    };
  }, [desktopImage, mobileImage]);

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
