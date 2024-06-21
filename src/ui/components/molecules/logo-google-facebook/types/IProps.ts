import React from 'react';

export interface IProps {
  googleIcon: string;
  facebookIcon: string;
  logoIcon: string;
  onGoogleLogin?: () => void;
  onFacebookLogin?: () => void;
}
