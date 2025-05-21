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
  "breakpoints": {
    "small": "480px",
    "small_mobile": "320px",
    "small_mobile_large": "568px",
    "medium": "768px",
    "large": "1024px",
    "large_tablet": "1112px",
    "extra_large": "1280px"
  },
  "colors": {
    "primary_main": "#0793bf",
    "secondary_main": "#004369",
    "tertiary_main": "#fff",
    "danger_main": "#dc3545",
    "warning_main": "#ffc107",
    "text_main": "#02322c",
    "text_secondary": "#6c757d",
    "text_main_hover": "#000",
    "background_main": "#f5f5f5",
    "main": "#fff",
    "gradient_lavender_bloom": "linear-gradient(45deg, #6e4aff 0%, #ccbfff 100%)",
    "gradient_coral_peach": "linear-gradient(45deg, #f47cb4 0%, #fee2cc 100%)",
    "gradient_serene_sky": "linear-gradient(45deg, #8e9ff5 0%, #e3e8fd 100%)",
    "gradient_ocean_turquoise": "linear-gradient(45deg, #1b5de0 0%, #36ccc2 100%)",
    "gradient_sunset_gold": "linear-gradient(45deg, #ff880b 0%, #ffd8b0 100%)",
    "gradient_orchid_twilight": "linear-gradient(45deg, #c165dd 0%, #5c27fe 100%)",
    "gradient_emerald_jade": "linear-gradient(45deg, #2afeb7 0%, #08c792 100%)",
    "gradient_sapphire_azure": "linear-gradient(45deg, #658df5 0%, #1153fc 100%)",
    "gradient_aqua_amethyst": "linear-gradient(45deg, #1de5e2 0%, #b588f7 100%)",
    "gradient_mint_lemonade": "linear-gradient(45deg, #3fcab2 0%, #fbeb8e 100%)",
    "gradient_fiery_lavender": "linear-gradient(45deg, #fe3a0a 0%, #f0c8f4 100%)",
    "gradient_violet_rose": "linear-gradient(45deg, #9627fc 0%, #fbc4d2 100%)",
    "gradient_pink_blossom": "linear-gradient(45deg, #ff5886 0%, #ffb6fc 100%)",
    "gradient_sky_magenta": "linear-gradient(45deg, #8cd7f7 0%, #f674f9 100%)",
    "gradient_neon_lime": "linear-gradient(45deg, #a9ffdb 0%, #17d970 100%)",
    "size_main": "1.3rem",
    "text_main_alpha": "rgb(2 50 44 / 85%)",
    "font_weight_bold": "700",
    "letter_spacing": "0.0625rem",
    "font_weight": "700",
    "font_size_primary": "1rem",
    "font_size_first": "6rem",
    "font_size_third": "8rem",
    "font_size_second": "1.75rem",
    "font_size_quarter": "2.5rem",
    "font_size_fifth": "0.75rem",
    "font_size_sixth": "0.938rem",
    "font_weight_first": "400",
    "font_weight_second": "800",
    "line_height_default": "1.3",
    "padding_large": "2rem",
    "background_desktop": "rgb(217 217 217 / 40%)",
    "background_color_black": "rgb(0 0 0 / 30%)",
    "text_input": "#a6a6a6",
    "paragraph_xl": "24px",
    "paragraph_lg": "20px",
    "paragraph_md": "18px",
    "paragraph_sm": "16px",
    "paragraph_xs": "14px",
    "paragraph_xl_height": "36px",
    "paragraph_lg_height": "30px",
    "paragraph_md_height": "27px",
    "paragraph_sm_height": "24px",
    "paragraph_xs_height": "21px",
    "paragraph_color_dark": "#0e1223",
    "paragraph_color_light": "#fff",
    "dark": "#151a2d",
    "dark_soft": "#f0f1f3",
    "disabled": "#bcc3e3",
    "light": "#fff",
    "negative": "#ff554a",
    "negative_soft": "#fff8f7",
    "positive": "#23c965",
    "positive_soft": "#f4fcf7",
    "primary": "#7a44ff",
    "primary_soft": "#f8f5ff",
    "secondary": "#9a4aff",
    "secondary_soft": "#faf6ff",
    "tertiary": "#3994ff",
    "tertiary_soft": "#f5f9ff",
    "warning": "#ffc14a",
    "warning_soft": "#fffcf6",
    "stroke_dark": "#151a2d",
    "stroke_dark_soft": "#e0e2e7",
    "stroke_disabled": "#9da6cb",
    "stroke_negative": "#ff554a",
    "stroke_negative_soft": "#ffe2e0",
    "stroke_positive": "#23c965",
    "stroke_positive_soft": "#d3f4e0",
    "stroke_primary": "#7a44ff",
    "stroke_primary_soft": "#e4daff",
    "stroke_secondary": "#9a4aff",
    "stroke_secondary_soft": "#ebdbff",
    "stroke_tertiary": "#3994ff",
    "stroke_tertiary_soft": "#d7eaff",
    "stroke_warning": "#ffc14a",
    "stroke_warning_soft": "#fff3db",
    "intenseviolet_main": "#7a44ff",
    "violet_main": "#9a4aff",
    "clear_main": "#9da6cb",
    "green_main": "#23c965",
    "border": "#ccc",
    "error": "#ff5a5f",
    "background_disabled": "#f5f5f5",
    "focus": "#4b5fff"
  },
  "typography": {
    "fonts": {
      "Lato": {
        "300": "/fonts/Lato-Light.woff2",
        "normal": "/fonts/Lato-Bold.woff2"
      },
      "Lato-bold": {
        "bold": "/fonts/Lato-Bold.woff2"
      },
      "Roboto": {
        "normal": "/fonts/Roboto-Bold.woff2"
      },
      "Montserrat": {
        "300": "/fonts/Montserrat-Light.woff2",
        "normal": "/fonts/Montserrat-Italic.woff2"
      },
      "Poppins-Bolt": {
        "normal": "/public/fonts/Poppins-Bold.ttf"
      },
      "Poppins-BoltItalic": {
        "normal": "/public/fonts/Poppins-BoldItalic.ttf"
      },
      "Poppins-SemiBolt": {
        "normal": "/public/fonts/Poppins-SemiBold.ttf"
      },
      "Poppins-SemiBoltItalic": {
        "normal": "/public/fonts/Poppins-SemiBoldItalic.ttf"
      },
      "Poppins-Medium": {
        "normal": "/public/fonts/Poppins-Medium.ttf"
      },
      "Poppins-MediumItalic": {
        "normal": "/public/fonts/Poppins-MediumItalic.ttf"
      },
      "Poppins-Regular": {
        "normal": "/public/fonts/Poppins-Regular.ttf"
      },
      "Poppins-RegularItalic": {
        "normal": "/public/fonts/Poppins-Italic.ttf"
      },
      "Poppins-Light": {
        "normal": "/public/fonts/Poppins-Light.ttf"
      },
      "Poppins-LightItalic": {
        "normal": "/public/fonts/Poppins-LightItalic.ttf"
      }
    },
    "fontSizes": {
      "primary": "1rem",
      "first": "6rem",
      "third": "8rem",
      "second": "1.75rem",
      "quarter": "2.5rem",
      "fifth": "0.75rem",
      "sixth": "0.938rem"
    },
    "fontWeights": {
      "bold": "700",
      "default": "700",
      "first": "400",
      "second": "800"
    },
    "lineHeights": {
      "default": "1.3"
    }
  },
  "spacing": {
    "padding_large": "2rem"
  }
};

export default tokens;
