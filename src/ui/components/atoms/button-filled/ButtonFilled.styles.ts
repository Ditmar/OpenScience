import type { SxProps, Theme } from '@mui/material';
import { theme } from '../../../../globals/theme';

const buttonColorMap = {
    white: theme.colors.neutral.white[900],
    black: theme.colors.neutral.black[500],
    grayStrongDark: theme.colors.neutral.grayStrongDark[500],
    graySoft: theme.colors.neutral.graySoft[500],
    primary: theme.colors.brand.primary[500],
    secondary: theme.colors.brand.secondary[500],
    tertiary: theme.colors.brand.tertiary[500],
    positive: theme.colors.feedback.positive[500],
    negative: theme.colors.feedback.negative[500],
    warning: theme.colors.feedback.warning[500],
    disabled: theme.colors.neutral.grayStrongDark[25],
} as const;

const buttonBackgroundColorMap = {
    white: theme.colors.neutral.white[900],
    black: theme.colors.neutral.black[500],
    grayStrongDark: theme.colors.neutral.grayStrongDark[500],
    graySoft: theme.colors.neutral.graySoft[500],
    primary: theme.colors.brand.primary[500],
    secondary: theme.colors.brand.secondary[500],
    tertiary: theme.colors.brand.tertiary[500],
    positive: theme.colors.feedback.positive[500],
    negative: theme.colors.feedback.negative[500],
    warning: theme.colors.feedback.warning[500],
    disabled: theme.colors.neutral.grayStrongDark[25],
} as const;

const hoverButtonColorMap = {

} as const;

const textButtonColorMap = {

} as const;

/* 
neutral
    white
    black
    grayStrongDark
    graySoft

brand
    primary
    secondary
    tertiary

feedback
    positive
    negative
    warning

*/

function stateKey(color?: boolean, error?: boolean) {
    if (color) return 'color';
    if (error) return 'error';
    return 'default';
}

export const iconSx = (opts: {
    disabled?: boolean;
    error?: boolean;
    size?: string;
}): SxProps<Theme> => {
    const colorKey = stateKey(opts.disabled, opts.error);

    return {
        // color: iconColorMap[colorKey],
        maxWidth: opts.size ?? '1.125rem',
        maxHeight: opts.size ?? '1.125rem',
    };
};