import React from 'react';
import type { IProps } from './types/IProps';
import './styles.scss';
import urls from './_mocked/references.json';

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

  const referenceUrls: Urls = urls as Urls; // Asignar el tipo Urls al objeto urls

  return (
    <div className={`reference-apa__text ${colorText}`}>
      <div className="container-text">
        <div className="number">
          <span>1</span>
        </div>
        <span>{text}</span>
      </div>

      <div className={`reference-apa__links ${colorLinks}`}>
        <a
          href={referenceUrls.pnasUrl}
          className={`reference-apa__link${color ? ` reference-apa__link--${color}` : ''}`}
        >
          Go to reference
        </a>
        <a
          href={referenceUrls.nejmUrl}
          className={`reference-apa__link${color ? ` reference-apa__link--${color}` : ''}`}
        >
          Crossref
        </a>
        <a
          href={referenceUrls.pubmedUrl}
          className={`reference-apa__link${color ? ` reference-apa__link--${color}` : ''}`}
        >
          PubMed
        </a>
        <a
          href={referenceUrls.googleScholarUrl}
          className={`reference-apa__link${color ? ` reference-apa__link--${color}` : ''}`}
        >
          Google Scholar
        </a>
      </div>
    </div>
  );
}

export default ReferenceAPA;
