import React, { useEffect, useState } from 'react';
import type { IProps } from './types/IProps';
import './styles.scss';

interface Urls {
  pnasUrl: string;
  nejmUrl: string;
  pubmedUrl: string;
  googleScholarUrl: string;
}

function ReferenceAPA(props: IProps) {
  const { text, color } = props;
  const colorText = color ? `reference-apa__text--${color}` : '';
  const colorLinks = color ? `reference-apa__links--${color}` : '';

  const [urls, setUrls] = useState<Urls>({
    pnasUrl: '',
    nejmUrl: '',
    pubmedUrl: '',
    googleScholarUrl: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          '/src/ui/components/atoms/reference-information/_mocked/references.json',
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Urls = (await response.json()) as Urls; // Explicitly type the response
        setUrls(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          // Aquí puedes manejar el error de una manera apropiada, como mostrarlo en la UI
        }
      }
    };

    fetchData().catch((error: unknown) => {
      if (error instanceof Error) {
        // Aquí puedes manejar el error de una manera apropiada, como mostrarlo en la UI
      }
    }); // Manejar explícitamente el error con .catch
  }, []);

  return (
    <div className={`reference-apa__text ${colorText}`}>
      <span>{text}</span>
      <div className={`reference-apa__links ${colorLinks}`}>
        <a
          href={urls.pnasUrl}
          className={`reference-apa__link${color ? ` reference-apa__link--${color}` : ''}`}
        >
          Go to reference
        </a>
        <a
          href={urls.nejmUrl}
          className={`reference-apa__link${color ? ` reference-apa__link--${color}` : ''}`}
        >
          Crossref
        </a>
        <a
          href={urls.pubmedUrl}
          className={`reference-apa__link${color ? ` reference-apa__link--${color}` : ''}`}
        >
          PubMed
        </a>
        <a
          href={urls.googleScholarUrl}
          className={`reference-apa__link${color ? ` reference-apa__link--${color}` : ''}`}
        >
          Google Scholar
        </a>
      </div>
    </div>
  );
}

export default ReferenceAPA;
