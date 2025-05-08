import { alpha, createTheme, darken } from "@mui/material";

const themeColors = {
    primary: "#8C7CF0",
    secondary: "#9EA4C1",
    success: "#57CA22",
    warning: "#FFA319",
    error: "#FF1943",
    info: "#33C2FF",
    black: "#CBCCD2",
    white: "#111633",
    primaryAlt: "#111633",
    trueWhite: "#ffffff",
};

export const defaultTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: themeColors.primary,
            contrastText: themeColors.white,
        },
        secondary: {
            main: themeColors.secondary,
            contrastText: themeColors.white,
        },
        success: {
            main: themeColors.success,
            contrastText: themeColors.white,
        },
        warning: {
            main: themeColors.warning,
            contrastText: themeColors.white,
        },
        error: {
            main: themeColors.error,
            contrastText: themeColors.white,
        },
        info: {
            main: themeColors.info,
            contrastText: themeColors.white,
        },
        background: {
            default: '#070C27',
            paper: '#070C27',
        },
    },
    typography: {
        fontFamily: "Poppins, sans-serif",
        fontSize: 14,
        h1: {
            fontSize: "2.5rem",
            fontWeight: 600,
            lineHeight: 1.2,
            color: themeColors.black,
        },
        h2: {
            fontSize: "2rem",
            fontWeight: 600,
            lineHeight: 1.2,
            color: themeColors.black,
        },
        h3: {
            fontSize: "1.75rem",
            fontWeight: 600,
            lineHeight: 1.2,
            color: themeColors.black,
        },
        h4: {
            fontSize: "1.5rem",
            fontWeight: 600,
            lineHeight: 1.2,
            color: themeColors.black,
        },
        h5: {
            fontSize: "1.25rem",
            fontWeight: 600,
            lineHeight: 1.2,
            color: themeColors.black,
        },
        h6: {
            fontSize: "1rem",
            fontWeight: 600,
            lineHeight: 1.2,
            color: themeColors.black,
        },
        body1: {
            fontSize: "1rem",
            fontWeight: 400,
            lineHeight: 1.5,
            color: themeColors.black,
        },
        body2: {
            fontSize: "0.875rem",
            fontWeight: 400,
            lineHeight: 1.5,
            color: themeColors.black,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    borderRadius: 8,
                    padding: "8px 16px",
                    fontWeight: 600,
                },
                containedPrimary: {
                    backgroundColor: themeColors.primary,
                    color: themeColors.white,
                    "&:hover": {
                        backgroundColor: darken(themeColors.primary, 0.1),
                    },
                },
                containedSecondary: {
                    backgroundColor: themeColors.secondary,
                    color: themeColors.white,
                    "&:hover": {
                        backgroundColor: darken(themeColors.secondary, 0.1),
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                    boxShadow:
                        "0px 4px 20px rgba(0, 0, 0, 0.1), 0px 2px 10px rgba(0, 0, 0, 0.05)",
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                h1: {
                    fontSize: "2.5rem",
                    fontWeight: 600,
                },
                h2: {
                    fontSize: "2rem",
                    fontWeight: 600,
                },
                h3: {
                    fontSize: "1.75rem",
                    fontWeight: 600,
                },
            },
        },
    },
})