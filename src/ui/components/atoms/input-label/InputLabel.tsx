import React, { useEffect, useState } from 'react';
import { Box, MenuItem, Select, type SelectChangeEvent } from '@mui/material';
import type { IProps, Option } from './types/IProps';
// import styles from './InputCountry.module.scss';
import { Icon } from '../../../utils/svg-icons/icons';
import globe from '../../../../assets/icons/globe.svg?raw';
import close_circle from '../../../../assets/icons/close_circle.svg?raw';
import info from '../../../../assets/icons/info.svg?raw';
import { selectSx, textSx, iconSx } from './styles';
import { InputSelect } from 'ui/components/atoms/input-select/InputSelect';

export function InputLabel(props: IProps) {
      const { label, error, helperText, disabled, size } = props;
    const [country, setCountry] = useState('');
    const [keyboardFocus, setKeyboardFocus] = useState(false);

    const handleChange = (event: SelectChangeEvent) => setCountry(event.target.value);

    useEffect(() => {
        const onKey = () => setKeyboardFocus(true);
        const onMouse = () => setKeyboardFocus(false);
        window.addEventListener('keydown', onKey);
        window.addEventListener('mousedown', onMouse);
        return () => {
            window.removeEventListener('keydown', onKey);
            window.removeEventListener('mousedown', onMouse);
        };
    }, []);

      const labelStyles = textSx({ disabled, error, size });
      const helperStyles = textSx({ disabled, error, size });
      const closeStyles = iconSx({ disabled, error });
      const infoStyles = iconSx({ disabled, error });

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                {globe && <Icon src={globe} styles={closeStyles as React.CSSProperties} />}
                <Box component="p" sx={labelStyles}>{label || ''}</Box>
            </Box>
            <Box>{close_circle && <Icon src={close_circle} styles={closeStyles as React.CSSProperties} />}</Box>
        </Box>
    );
}
