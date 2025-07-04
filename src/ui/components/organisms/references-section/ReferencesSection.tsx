import React from 'react';

import LabelReferences from '../../atoms/label-references/LabelReferences';
import Reference from '../../atoms/reference-information/Reference';
import type { IProps } from './types/IProps';
import styles from './ReferencesSection.module.scss';

function ReferencesSection({ references }: IProps) {
  return (
    <section className={styles['references-section']}>
      <LabelReferences text="REFERENCIAS" />

      <ol className={styles.list}>
        {references.map((item, index) => (
          <li key={`${item.text}-${index.toString()}`}>
            <Reference text={item.text} />
          </li>
        ))}
      </ol>
    </section>
  );
}

export default ReferencesSection;
