import React from 'react';
import { render, screen } from '@testing-library/react';
import SidePanel from './SidePanel';
import LogoFooter from '../../atoms/logo-footer/LogoFooter';
import Tags from '../../atoms/Tags/Tags';
import logo from '../../../../assets/icons/logo.svg?raw';

describe('SidePanel Component', () => {
  test('should render PublishButton and IconUpload', () => {
    render(
      <SidePanel>
        <LogoFooter icon={logo} />
        <Tags variant="default" labels={['Workings', 'Optimism', 'Meaning', 'Promoting']} />
      </SidePanel>,
    );
    const logoImage = screen.getByTestId('logo_icon');
    const labels = ['Workings', 'Optimism', 'Meaning', 'Promoting'];
    expect(logoImage).toBeInTheDocument();
    labels.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });
});
