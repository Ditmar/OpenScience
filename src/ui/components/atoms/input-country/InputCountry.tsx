import React from "react";
import type { IProps } from "./types/IProps";
import styles from "./InputCountry.module.scss";
import { Icon } from '../../../utils/svg-icons/icons';
import { InputLabel, MenuItem, Select, type SelectChangeEvent } from "@mui/material";

export const InputCountry = (props: IProps) => {
    const { borderRadius, iconGlobe, iconClose, iconInfo, iconFlag } = props;
    const [country, setCountry] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setCountry(event.target.value);
    };

    return (
        <>
            <div className={`${styles['country-input']}`}>
                <div>
                    <div>
                        {iconGlobe && <Icon data-testid="button-icon" src={iconGlobe} className={styles.buttonIcon} />}
                        <label htmlFor="">Select Country:</label>
                    </div>
                    <div>
                        {iconClose && <Icon data-testid="button-icon" src={iconClose} className={styles.buttonIcon} />}
                    </div>
                </div>
                <div className={`${styles['select-wrapper']}`}>
                    <Select
                        id="country-select"
                        label="country-select"
                        value={country}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        className={`${styles['select-country']} ${borderRadius == "circle" ? styles['select-circle'] : borderRadius == "semi" ? styles['select-semi'] : null}`}
                    >
                        <MenuItem value="">
                            {iconFlag && <Icon data-testid="button-icon" src={iconFlag} className={styles.buttonIcon} />}
                            Argentina
                        </MenuItem>
                        <MenuItem value="bo">
                            {iconFlag && <Icon data-testid="button-icon" src={iconFlag} className={styles.buttonIcon} />}
                            Bolivia
                        </MenuItem>
                        <MenuItem value="cl">
                            {iconFlag && <Icon data-testid="button-icon" src={iconFlag} className={styles.buttonIcon} />}
                            Chile
                        </MenuItem>
                    </Select>
                </div>
                <div>
                    <div>
                        {iconInfo && <Icon data-testid="button-icon" src={iconInfo} className={styles.buttonIcon} />}
                        <p>Hint Text</p>
                    </div>
                    <div>
                        {iconInfo && <Icon data-testid="button-icon" src={iconInfo} className={styles.buttonIcon} />}
                    </div>
                </div>
            </div>
        </>
    );
}