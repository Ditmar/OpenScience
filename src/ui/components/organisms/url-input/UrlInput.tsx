import { Label } from 'ui/components/atoms/label-input/Label';
import { Input } from 'ui/components/molecules/input-url/Input';
import { StyledIcon } from 'ui/components/atoms/label-input/Label.styles';
import type {URLInputComponentProps} from './types/IProps';
import React from 'react';
import {
  StyledButton,
  StyledFooter,
  StyledHeader,
  StyledHintText,
  ToolTipButton,
  UrlInputStyled,
} from './UrlInput.styles';


export function UrlInput({
  value,
  onChange,
  variant = 'default',
  size = 'medium',
  radius = 'small',
  label = 'Website Address',
  placeholder = 'example.com',
  hintText = 'Enter a valid URL',
  showCloseButton = true,
  onClose,
  onCopy,
}: URLInputComponentProps) {
  // const ref = React.useRef<HTMLInputElement>(null);

  const handleOnCopy = () => {
    if (onCopy) {
      onCopy();
    }
    navigator.clipboard
      .writeText(value)
      .then(() => {
        console.log('URL copied to clipboard:', value);
      })
      .catch((error: unknown) => {
        console.error('Failed to copy URL:', error);
      });
  };

  return (
    <UrlInputStyled>
      <StyledHeader>
        <Label iconName="fi-sr-globe">{label}</Label>
        {showCloseButton && (
          <StyledButton onClick={onClose} aria-label="Cerrar" setBorder>
            <StyledIcon iconName="Close-URL" />
          </StyledButton>
        )}
      </StyledHeader>
      <Input
        radius={radius}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        variant={variant}
        onCopy={handleOnCopy}
        size={size}
      />
      <StyledFooter>
        {variant === 'error' && (
          <StyledHintText variant={variant} size={size}>
            <StyledIcon iconName="Info-Tooltip" iconSize="medium" />
            {hintText}
          </StyledHintText>
        )}

        <ToolTipButton title="Copiar URL" aria-label="Copiar URL" placement="bottom" arrow>
          <StyledButton>
            <StyledIcon iconName="Info-Tooltip" iconSize="medium" />
          </StyledButton>
        </ToolTipButton>
      </StyledFooter>
    </UrlInputStyled>
  );
}