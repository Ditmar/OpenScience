export interface ISocialLink {
  id: string;
  type: 'whatsapp' | 'telegram' | 'facebook';
  url: string;
}

export interface ISocialMenuProps {
  socialLinks: ISocialLink[];
  orientation?: 'vertical' | 'horizontal';
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  onSocialClick?: (socialLink: ISocialLink) => void;
  className?: string;
  testId?: string;
}
