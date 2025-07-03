import React, { useState, useRef, useEffect, useCallback } from 'react';
import LabelDate from 'ui/components/atoms/label-date/LabelDate';
import VolumeBox from '../../molecules/volume-box/VolumeBox';
import Thumbnail from '../../atoms/thumbnail/Thumbnail';
import LabelArticles from '../../atoms/label-articles/LabelArticles';
import RecentArticleCard from '../../molecules/Recent-Article-Card/Recent-Article-Card';
import DotsNavigation from '../../atoms/DotsNavigation/DotsNavigation';
import './styles.scss';
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeVolume, volumes.length]);

  useEffect(() => {
    if (isHovered) return undefined;
    timeoutRef.current = setTimeout(() => {
      changeVolume((activeVolume + 1) % volumes.length);
    }, 5000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeVolume, isHovered, volumes.length]);

  const volume = volumes[activeVolume];

  const onDotClick = useCallback(
    (idx: number) => {
      changeVolume(idx);
    },
    [activeVolume, volumes.length],
  );

  return (
    <section
      className="recent-articles-section"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      aria-label="Artículos más recientes"
    >
      <div className="recent-articles-section__head">
        <VolumeBox>
          <LabelDate date={volume.date} />
          <span> | {volume.volumeLabel}</span>
          <span>{String(volume.volumeNumber)}</span>
          <span> | Nu. {String(volume.issueNumber)}</span>
        </VolumeBox>
        <Thumbnail pathImage={volume.image} alt={`Volumen ${String(volume.volumeNumber)}`} />
      </div>

      <div className="recent-articles-section__label">
        <LabelArticles variant="secondary">ARTÍCULOS MÁS RECIENTES</LabelArticles>
      </div>

      <div className={`recent-articles-section__fade${fade ? ' fade-out' : ' fade-in'}`}>
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
      </div>

      <DotsNavigation count={volumes.length} activeIndex={activeVolume} onDotClick={onDotClick} />
    </section>
  );
}

export default RecentArticlesSection;
