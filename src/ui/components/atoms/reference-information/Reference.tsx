import React from 'react';
import type { IProps } from './types/IProps';
import styles from './Reference.module.scss';
import urls from './_mocked/references.json';

interface Urls {
  pnasUrl: string;
  nejmUrl: string;
  pubmedUrl: string;
  googleScholarUrl: string;
}

function ReferenceAPA(props: IProps) {
  const { text, color } = props;
  const colorText = color ? styles[`reference-apa-text--${color}`] : '';
  const colorLinks = color ? styles[`reference-apa-links--${color}`] : '';

  const referenceUrls: Urls = urls as Urls;

  return (
    <div className={`${styles['reference-apa-text']} ${colorText}`}>
      <div className={styles['container-text']}>
        <div className={styles.number}>
          <span>1</span>
        </div>
        <span>{text}</span>
      </div>

      <div className={`${styles['reference-apa-links']} ${colorLinks}`}>
        <a
          href={referenceUrls.pnasUrl}
          className={`${styles['reference-apa-link']} ${
            color ? styles[`reference-apa-link--${color}`] : ''
          }`}
        >
          Go to reference
        </a>
        <a
          href={referenceUrls.nejmUrl}
          className={`${styles['reference-apa-link']} ${
            color ? styles[`reference-apa-link--${color}`] : ''
          }`}
        >
          Crossref
        </a>
        <a
          href={referenceUrls.pubmedUrl}
          className={`${styles['reference-apa-link']} ${
            color ? styles[`reference-apa-link--${color}`] : ''
          }`}
        >
          PubMed
        </a>
        <a
          href={referenceUrls.googleScholarUrl}
          className={`${styles['reference-apa-link']} ${
            color ? styles[`reference-apa-link--${color}`] : ''
          }`}
        >
          Google Scholar
        </a>
      </div>
    </div>
  );
}

export default ReferenceAPA;
