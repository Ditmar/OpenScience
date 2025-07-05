import React, { useState } from 'react';
import type { DownloadMediaProps } from './types/IProps';
import MediaDownloadIcon from '../../atoms/media-download/MediaDownloadIcon';
import {
  Wrapper,
  IconBar,
  ImageContainer,
  LeftIconWrapper,
  RightIconWrapper,
} from './DownloadMedia.style';

function DownloadMedia({ imageSrc, onSlidePrev, onDownload }: DownloadMediaProps) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onSlidePrev();
    }, 300);
  };

  return (
    <Wrapper className={isClosing ? 'slide-out' : ''}>
      <IconBar>
        <LeftIconWrapper>
          <MediaDownloadIcon type="slide-left" onClick={handleClose} />
        </LeftIconWrapper>
        <RightIconWrapper>
          <MediaDownloadIcon
            type="download"
            onClick={() => {
              onDownload();
            }}
          />
        </RightIconWrapper>
      </IconBar>

      <ImageContainer style={{ backgroundImage: `url(${imageSrc})` }} />
    </Wrapper>
  );
}

export default DownloadMedia;
