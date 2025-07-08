import type { SxProps, Theme } from '@mui/material';
import { theme } from '../../../../globals/theme';

const fontSizeSelectMap = {
    small: '1rem',
    medium: '1.125rem',
    large: '1.25rem',
} as const;

const defaultColorMap = {
    white: theme.colors.neutral.grayStrongDark[500],
    black: theme.colors.neutral.grayStrongDark[500],
    primary: theme.colors.brand.primary[500],
    secondary: theme.colors.brand.secondary[500],
    tertiary: theme.colors.brand.tertiary[500],
    error: theme.colors.feedback.negative[500],
} as const;

const extraSoftColorMap = {
    white: theme.colors.neutral.graySoft[100],
    black: theme.colors.neutral.graySoft[100],
    primary: theme.colors.brand.primary[100],
    secondary: theme.colors.brand.secondary[100],
    tertiary: theme.colors.brand.tertiary[100],
    error: theme.colors.feedback.negative[100],
} as const;

const ultraSoftColorMap = {
    white: theme.colors.neutral.graySoft[50],
    black: theme.colors.neutral.graySoft[50],
    primary: theme.colors.brand.primary[50],
    secondary: theme.colors.brand.secondary[50],
    tertiary: theme.colors.brand.tertiary[50],
    error: theme.colors.feedback.negative[50],
} as const;

function stateKey<T extends keyof typeof defaultColorMap>(colorVariant: T | undefined, error?: boolean): keyof typeof defaultColorMap {
    if (error) return 'error';
    return colorVariant ?? 'primary';
}

export const menuItemSx = (opts: {
    error?: boolean;
    size?: 'small' | 'medium' | 'large';
    colorVariant?: 'primary' | 'secondary' | 'tertiary' | 'white' | 'black';
}): SxProps<Theme> => {
    const fontSize = fontSizeSelectMap[opts.size ?? 'medium'];
    const colorKey = stateKey(opts.colorVariant, opts.error);

    return {
        transition: 'all 0.3s',
        display: 'flex',
        gap: '10px',
        backgroundColor: theme.colors.neutral.white[900],
        fontWeight: '400',
        fontFamily: 'Poppins-Light, sans-serif',
        height: '3.15rem',
        fontSize,
        padding: '10px 24px',
        '&:focus, &:active, &:active:hover': {
            backgroundColor: extraSoftColorMap[colorKey],
        },
        '&:hover': {
            backgroundColor: ultraSoftColorMap[colorKey],
        }
    };
};

export const listSubheaderSx = (): SxProps<Theme> => {

    return {
        fontWeight: '500',
        fontFamily: 'Poppins-Light, sans-serif',
        fontSize: '1.25rem',
        height: '3.05rem',
        color: theme.colors.neutral.grayStrongDark[700],
    }
}
