// src/ui/components/atoms/SubTitleAndParagraph/SubTitleAndParagraph.tsx

import React from 'react';
import { Typography, Box } from '@mui/material'; // Importamos Typography y Box de MUI
import type { IProps } from './Types/IProps';
// NO importamos SCSS modular aquí

function SubTitleAndParagraph({
  title,
  subtitle,
  size = 'md',
  alignment = 'left',
  variant = 'default',
  titleTag = 'h2',
  subtitleTag = 'p',
  className = '',
}: IProps) {
  const getTitleVariant = (s: 'sm' | 'md' | 'lg'): 'h4' | 'h3' | 'h2' => {
    switch (s) {
      case 'sm':
        return 'h4';
      case 'md':
        return 'h3';
      case 'lg':
        return 'h2';
      default:
        return 'h3';
    }
  };

  const getSubtitleVariant = (s: 'sm' | 'md' | 'lg'): 'body2' | 'body1' | 'subtitle1' => {
    switch (s) {
      case 'sm':
        return 'body2';
      case 'md':
        return 'body1';
      case 'lg':
        return 'subtitle1';
      default:
        return 'body1';
    }
  };

  // Estilos basados en 'variant'
  const getTextColor = (v: 'default' | 'emphasized' | 'minimal') => {
    switch (v) {
      case 'emphasized':
        return 'text.primary';
      case 'minimal':
        return 'text.secondary';
      default:
        return 'text.primary';
    }
  };

  const getFontWeight = (v: 'default' | 'emphasized' | 'minimal') => {
    switch (v) {
      case 'emphasized':
        return 'fontWeightBold';
      default:
        return 'fontWeightRegular';
    }
  };

  return (
    <Box
      className={className}
      sx={{
        textAlign: alignment,
      }}
    >
      <Typography
        variant={getTitleVariant(size)}
        component={titleTag}
        sx={{
          color: getTextColor(variant),
          fontWeight: getFontWeight(variant),
          marginBottom: (theme) => theme.spacing(1),
        }}
      >
        {title}
      </Typography>

      {subtitle && (
        <Typography
          variant={getSubtitleVariant(size)}
          component={subtitleTag}
          sx={{
            color: getTextColor('minimal'),
            fontWeight: getFontWeight('default'),
            marginTop: 0,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}

export default SubTitleAndParagraph;
