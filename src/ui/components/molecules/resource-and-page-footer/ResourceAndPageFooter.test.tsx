import React from 'react';
import { render } from '@testing-library/react';
import ResourceAndPageFooter from './ResourceAndPageFooter';
import Variables from '../../atoms/label-variables/Variables';

test('renders ResourceAndPageFooter component', () => {
  const { getByText } = render(
    <ResourceAndPageFooter>
      <div
        className="resource-and-page-footer__section 
        resources-and-page-footer__section--resources 
        resources-and-page-footer__section--resources-desktop"
      >
        <Variables text="RECURSOS" />
        <Variables text="ARTÍCULOS" />
        <Variables text="VOLÚMENES" />
      </div>
      <div
        className="resource-and-page-footer__separator 
        resources-and-page-footer__separator--desktop"
      />
      <div
        className="resource-and-page-footer__section 
        resources-and-page-footer__section--page 
        resources-and-page-footer__section--page-desktop"
      >
        <Variables text="PÁGINA" />
        <Variables text="UNIPOL.EDU.BO" href="https://www.unipol.edu.bo" />
      </div>
    </ResourceAndPageFooter>,
  );

  expect(getByText('RECURSOS')).toBeInTheDocument();
  expect(getByText('ARTÍCULOS')).toBeInTheDocument();
  expect(getByText('VOLÚMENES')).toBeInTheDocument();
  expect(getByText('PÁGINA')).toBeInTheDocument();
  expect(getByText('UNIPOL.EDU.BO')).toBeInTheDocument();
});
