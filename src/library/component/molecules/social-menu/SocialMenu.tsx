import React, { useCallback } from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import type { ISocialMenuProps, ISocialLink } from './types/IProps';
import { SocialMenuContainer, SocialIconButton } from './SocialMenu.style';

function SocialMenu({
  socialLinks,
  orientation = 'vertical',
  backgroundColor = '#0891b2',
  size = 'medium',
  onSocialClick,
  className,
  testId = 'social-menu',
}: ISocialMenuProps): JSX.Element | null {
  const getSocialIcon = useCallback((type: ISocialLink['type']) => {
    switch (type) {
      case 'whatsapp':
        return <WhatsAppIcon aria-hidden role="img" />;
      case 'telegram':
        return <TelegramIcon aria-hidden role="img" />;
      case 'facebook':
        return <FacebookRoundedIcon aria-hidden role="img" />;
      default:
        return null;
    }
  }, []);

  const getSocialLabel = useCallback((type: ISocialLink['type']) => {
    switch (type) {
      case 'whatsapp':
        return 'Contactar por WhatsApp';
      case 'telegram':
        return 'Contactar por Telegram';
      case 'facebook':
        return 'Visitar página de Facebook';
      default:
        return 'Red social';
    }
  }, []);

  const handleSocialClick = useCallback(
    (socialLink: ISocialLink, event: React.MouseEvent) => {
      event.preventDefault();

      if (onSocialClick) {
        onSocialClick(socialLink);
      }

      window.open(socialLink.url, '_blank', 'noopener,noreferrer');
    },
    [onSocialClick],
  );

  const handleKeyDown = useCallback(
    (socialLink: ISocialLink, event: React.KeyboardEvent) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handleSocialClick(socialLink, event as unknown as React.MouseEvent);
      }
    },
    [handleSocialClick],
  );

  if (!socialLinks.length) {
    return null;
  }

  return (
    <SocialMenuContainer
      orientation={orientation}
      backgroundColor={backgroundColor}
      className={className}
      data-testid={testId}
      role="navigation"
    >
      {socialLinks.map((socialLink) => {
        const icon = getSocialIcon(socialLink.type);
        const defaultLabel = getSocialLabel(socialLink.type);

        return (
          <SocialIconButton
            key={socialLink.id}
            socialType={socialLink.type}
            size={size}
            backgroundColor={backgroundColor}
            onClick={(event) => {
              handleSocialClick(socialLink, event);
            }}
            onKeyDown={(event) => {
              handleKeyDown(socialLink, event);
            }}
            data-testid={`social-link-${socialLink.type}`}
            tabIndex={0}
            role="button"
            aria-label={defaultLabel}
          >
            {icon}
          </SocialIconButton>
        );
      })}
    </SocialMenuContainer>
  );
}

export default SocialMenu;
