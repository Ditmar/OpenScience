import React from 'react';
import type { IProps } from './types/IProps';
import { Box, Button } from '@mui/material';
import { theme } from 'globals/theme';

import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

export function ButtonFilled(props: IProps) {
    const { text, textColor, buttonColor, startIcon, endIcon, disabled, borderRadius, size, dark } = props;

    
    return (
        <Box>
            <Button sx={{backgroundColor: theme.colors.brand.primary[100]}} startIcon={<CancelOutlinedIcon />} endIcon={<CancelOutlinedIcon />}>{text}</Button>
        </Box>
    );
}
