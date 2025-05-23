/**
 * @generated Automatically by the buildTokens function. Do not edit manually.
 * @see scripts/tokenizer.mjs
 */
export interface DesignTokens {
  breakpoints?: Record<string, string>;
  colors?: Record<string, string>;
  typography?: {
    fonts: Record<string, Record<string, string>>;
    fontSizes: Record<string, string>;
    fontWeights: Record<string, string | number>;
    lineHeights: Record<string, string | number>;
  };
  spacing?: Record<string, string>;
  shadows?: Record<string, string>;
}

const tokens: DesignTokens = {
  breakpoints: {
    small: '480px',
    small_mobile: '320px',
    small_mobile_large: '568px',
    medium: '768px',
    large: '1024px',
    large_tablet: '1112px',
    extra_large: '1280px',
  },
  colors: {
    primary_main: '#0793bf',
    secondary_main: '#004369',
    tertiary_main: '#fff',
    danger_main: '#dc3545',
    warning_main: '#ffc107',
    text_main: '#02322c',
    text_secondary: '#6c757d',
    text_main_hover: '#000',
    background_main: '#f5f5f5',
    main: '#fff',
    size_main: '1.3rem',
    text_main_alpha: 'rgb(2 50 44 / 85%)',
    font_weight_bold: '700',
    letter_spacing: '0.0625rem',
    font_weight: '700',
    font_size_primary: '1rem',
    font_size_first: '6rem',
    font_size_third: '8rem',
    font_size_second: '1.75rem',
    font_size_quarter: '2.5rem',
    font_size_fifth: '0.75rem',
    font_size_sixth: '0.938rem',
    font_weight_first: '400',
    font_weight_second: '800',
    line_height_default: '1.3',
    padding_large: '2rem',
    background_desktop: 'rgb(217 217 217 / 40%)',
    background_color_black: 'rgb(0 0 0 / 30%)',
    text_input: '#a6a6a6',
  },
  typography: {
    fonts: {
      Lato: {
        '300': '/fonts/Lato-Light.woff2',
        normal: '/fonts/Lato-Bold.woff2',
      },
      'Lato-bold': {
        bold: '/fonts/Lato-Bold.woff2',
      },
      Roboto: {
        normal: '/fonts/Roboto-Bold.woff2',
      },
      Montserrat: {
        '300': '/fonts/Montserrat-Light.woff2',
        normal: '/fonts/Montserrat-Italic.woff2',
      },
    },
    fontSizes: {
      primary: '1rem',
      first: '6rem',
      third: '8rem',
      second: '1.75rem',
      quarter: '2.5rem',
      fifth: '0.75rem',
      sixth: '0.938rem',
    },
    fontWeights: {
      bold: '700',
      default: '700',
      first: '400',
      second: '800',
    },
    lineHeights: {
      default: '1.3',
    },
  },
  spacing: {
    padding_large: '2rem',
  },
};

export default tokens;
