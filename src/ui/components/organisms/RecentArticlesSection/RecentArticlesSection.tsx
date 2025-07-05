import React, { useState, useRef, useEffect, useCallback } from 'react';
import LabelDate from '../../atoms/label-date/LabelDate';
import LabelVol from '../../atoms/label-vol/LabelVol';
import VolumeBox from '../../molecules/volume-box/VolumeBox';
import LabelArticles from '../../atoms/label-articles/LabelArticles';
import RecentArticleCard from '../../molecules/Recent-Article-Card/Recent-Article-Card';
import DotsNavigation from '../../atoms/DotsNavigation/DotsNavigation';
import {
  Section,
  Head,
  Content,
  ImageContainer,
  ArticlesContainer,
  LabelWrapper,
  FadeWrapper,
} from './RecentArticlesSection.styles';
import type { IProps } from './Props/IProps';

const FADE_DURATION = 400;

function RecentArticlesSection({ volumes }: IProps) {
  const [activeVolume, setActiveVolume] = useState(0);
  const [fade, setFade] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function changeVolume(idx: number) {
    if (idx === activeVolume) return;
    setFade(true);
    setTimeout(() => {
      setActiveVolume(idx);
      setFade(false);
    }, FADE_DURATION);
  }

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'ArrowRight') {
        changeVolume((activeVolume + 1) % volumes.length);
      } else if (e.key === 'ArrowLeft') {
        changeVolume((activeVolume - 1 + volumes.length) % volumes.length);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeVolume, volumes.length]);

  useEffect(() => {
    if (isHovered) {
      return () => {};
    }
    timeoutRef.current = setTimeout(() => {
      changeVolume((activeVolume + 1) % volumes.length);
    }, 5000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeVolume, isHovered, volumes.length]);

  const volume = volumes[activeVolume];

  const onDotClick = useCallback(
    (idx: number) => {
      changeVolume(idx);
    },
    [activeVolume],
  );

  return (
    <Section
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      aria-label="Artículos más recientes"
    >
      <Head>
        <VolumeBox className="custom-label-date-color">
          <LabelDate date={new Date(volume.date)} />
          <span className="separator">│</span>
          <LabelVol volumen="Vol." id={volume.volumeNumber} />
          <span className="separator">│</span>
          <LabelVol volumen="Nu." id={volume.issueNumber} />
        </VolumeBox>
      </Head>

      <Content>
        <ImageContainer>
          <img
            src={typeof volume.image === 'string' ? volume.image : volume.image.src}
            alt={`Volumen ${String(volume.volumeNumber)}`}
          />
        </ImageContainer>

        <ArticlesContainer>
          <LabelWrapper>
            <LabelArticles variant="secondary">ARTÍCULOS MÁS RECIENTES</LabelArticles>
          </LabelWrapper>

          <FadeWrapper fade={fade}>
            {volume.articles.map((article) => (
              <RecentArticleCard
                key={article.id}
                date={article.date}
                title={article.title}
                description={article.description}
                author={article.author}
                pdfUrl={article.pdfUrl}
                shareUrl={article.shareUrl}
              />
            ))}
          </FadeWrapper>

          <DotsNavigation
            count={volumes.length}
            activeIndex={activeVolume}
            onDotClick={onDotClick}
          />
        </ArticlesContainer>
      </Content>
    </Section>
  );
}

export default RecentArticlesSection;
