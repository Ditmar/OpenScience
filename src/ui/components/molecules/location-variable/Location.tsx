import React from 'react';
import {
  IconWrapper,
  LocationContainer,
  LocationDivider,
  LocationSection,
  LocationText,
} from './Location.styles';
import type { IFooterProps } from './types/IProps';
import defaultFacebookIcon from '../../../../assets/icons/facelocation.svg?raw';
import defaultLocationIcon from '../../../../assets/icons/location.svg?raw';

function Location({
  locationText,
  followUsText,
  size = 'medium',
  icons = {
    location: defaultLocationIcon,
    facebook: defaultFacebookIcon,
  },
}: IFooterProps) {
  return (
    <LocationContainer size={size} role="contentinfo">
      <LocationSection>
        <LocationText size={size} variant="body2">
          {locationText}
        </LocationText>
        <IconWrapper
          size={size}
          aria-hidden="true"
          dangerouslySetInnerHTML={{ __html: icons.location }}
        />
      </LocationSection>

      <LocationDivider size={size} />

      <LocationSection>
        <LocationText size={size} variant="body2">
          {followUsText}
        </LocationText>
        <IconWrapper
          size={size}
          aria-hidden="true"
          dangerouslySetInnerHTML={{ __html: icons.facebook }}
        />
      </LocationSection>
    </LocationContainer>
  );
}

export default Location;
