import { useState, type ChangeEvent } from 'react';
import type { IProps } from './types/IProps';
import { Icon } from '../../../utils/svg-icons/icons';
import './InputText.scss';
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
    <div className="login__field">
      <span>{label}</span>
      <input
        type={typeDate}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className={!isValid ? 'invalid__input' : ''}
      />
      <button type="button" className="password__eye" onClick={handlerClick}>
        {eyeIcon && <Icon data-testid="eye-icon" src={eyeIcon} className="eye__icon" />}
      </button>
    </div>
  );
}
export default InputText;
