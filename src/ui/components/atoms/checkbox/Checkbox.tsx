import { Checkbox as MUICheckbox, Box } from '@mui/material';
import styles from './Checkbox.module.scss';
import type { CheckboxProps } from './types/IProps';

function Checkbox({
  checked = false,
  onChange,
  isDisabled = false,
  className,
  icon,
  checkedIcon,
  ariaLabel = 'Select card',
}: CheckboxProps) {
  const combinedClassName = [styles.checkbox, className].filter(Boolean).join(' ').trim();

  return (
    <MUICheckbox
      checked={checked}
      onChange={onChange}
      disabled={isDisabled}
      disableRipple
      className={combinedClassName}
      icon={icon ?? <Box className={styles.icon} />}
      checkedIcon={checkedIcon ?? <Box className={styles.checkedIcon} />}
      inputProps={{ 'aria-label': ariaLabel }}
    />
  );
}

export default Checkbox;
