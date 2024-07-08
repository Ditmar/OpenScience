import { useState, type ChangeEvent } from 'react';
import type { IProps } from './types/IProps';
import { Icon } from '../../../utils/svg-icons/icons';
import styles from './InputText.module.scss';
import useForm from '../../../utils/hooks/useForm';

function InputText({ label, type, name, placeholder, isValid, eyeIcon, onChangeValue }: IProps) {
  
  const [typeDate, setTypeData] = useState(type);
  const { form, handlerChangeForm } = useForm({ value: '' });

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    handlerChangeForm(event);
    onChangeValue(form);
  }

  function handlerClick() {
    setTypeData(typeDate === 'password' ? 'text' : 'password');
  }

  return (
    <div className={styles.login__field}>
      <span>{label}</span>
      <input
        type={typeDate}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className={!isValid ? styles.invalid__input : ''}
      />
      {type === 'password' && (
        <button type="button" className={styles.password__eye} onClick={handlerClick}>
          {eyeIcon && <Icon data-testid="eye-icon" src={eyeIcon} className={styles.eye__icon} />}
        </button>
      )}
    </div>
  );
}

export default InputText;
