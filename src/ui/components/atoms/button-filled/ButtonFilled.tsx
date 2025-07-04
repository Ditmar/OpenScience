import React from 'react';
import type { IProps } from './types/IProps';
import { Box, Button } from '@mui/material';
import { theme } from 'globals/theme';

import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { buttonSx } from './ButtonFilled.styles';

export function ButtonFilled(props: IProps) {
    const { text, startIcon, endIcon, borderRadius, colorVariant, dark, disabled, size, buttonVariant } = props;

    const buttonStyles = buttonSx({ borderRadius, colorVariant, dark, disabled, size, buttonVariant });

    return (
        <Box>
            <Button sx={buttonStyles} startIcon={<CancelOutlinedIcon />} endIcon={<CancelOutlinedIcon />}>{text}</Button>
        </Box>
    );
}
