import React from 'react';
import { render, screen } from '@testing-library/react';
import References from './References';
import ReferenceAPA from '../../atoms/reference-information/Reference';
import LabelReferences from '../../atoms/label-references/LabelReferences';

describe('References Component', () => {
  test('should render PublishButton and IconUpload', () => {
    render(
      <References>
        <LabelReferences />
        <ReferenceAPA text="1 A. Gessain, E. Nakoune, Y. Yazdanpanah, Monkeypox. N. Engl. J. Med. 387, 1783–1793 (2022)" />
      </References>,
    );
    const referenceElement = screen.getByText(
      '1 A. Gessain, E. Nakoune, Y. Yazdanpanah, Monkeypox. N. Engl. J. Med. 387, 1783–1793 (2022)',
    );
    expect(referenceElement).toBeInTheDocument();
  });
});
