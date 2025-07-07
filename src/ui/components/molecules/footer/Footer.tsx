import {
  FooterContainer,
  FooterSection,
  FooterSectionInner,
  FooterTitle,
  LocationWrapper,
  LogoSection,
  VariablesContainer,
} from './Footer.styles';
import LogoFooter from '../../atoms/logo-footer/LogoFooter';
import Variables from '../../atoms/label-variables/Variables';
import LabelResourcesPage from '../../atoms/label-resources-page/LabelResourcesPage';
import logo from '../../../../assets/icons/logo.svg?raw';
import type { IFooterProps } from './types/IProps';
import Location from '../location-variable/Location';

function Footer({
  locationText,
  followUsText,
  titleText = 'FOOTER',
  size = 'medium',
}: IFooterProps) {
  return (
    <FooterContainer size={size}>
      <LogoSection>
        <FooterTitle variant="h5">{titleText}</FooterTitle>
        <LogoFooter icon={logo} color="secondary" />
      </LogoSection>

      <VariablesContainer>
        <FooterSection>
          <LabelResourcesPage text="RECURSOS" />
          <FooterSectionInner>
            <Variables text="ARTÍCULOS" colorVariant="primary" />
            <Variables text="VOLUMENES" colorVariant="primary" />
          </FooterSectionInner>
        </FooterSection>

        <FooterSection>
          <LabelResourcesPage text="PÁGINA" />
          <FooterSectionInner>
            <Variables text="UNIPOL.EDU.BO" colorVariant="primary" />
          </FooterSectionInner>
        </FooterSection>
      </VariablesContainer>

      <LocationWrapper>
        <Location locationText={locationText} followUsText={followUsText} size={size} />
      </LocationWrapper>
    </FooterContainer>
  );
}

export default Footer;
