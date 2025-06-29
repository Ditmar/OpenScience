import { Checkbox as MUICheckbox } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
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
      icon={icon ?? <CheckBoxOutlineBlankIcon />}
      checkedIcon={checkedIcon ?? <CheckBoxIcon />}
      inputProps={{ 'aria-label': ariaLabel }}
    />
  );
}

export default Checkbox;
