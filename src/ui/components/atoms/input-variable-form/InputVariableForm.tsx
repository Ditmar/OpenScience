import React, { useState } from 'react';
import './styles.scss';
import type { IProps } from './types/IProps';
import Ojo1 from '../../../../assets/icons/Vector3.svg';

interface InputVariableFormProps {
  label: string;
  type: 'text' | 'email' | 'password';
  value: string;
  onChange: (newValue: string) => void;
}

const InputVariableForm: React.FC<InputVariableFormProps> = ({ label, type, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="input-variable-form">
      <label htmlFor={`input-${label}`} />
      <div className="input-container">
        <input
          id={`input-${label}`}
          type={showPassword ? 'text' : type}
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          placeholder={label}
        />
        {type === 'password' && (
          <span className="password-toggle" onClick={handleTogglePassword}>
            <img src={Ojo1} alt="Toggle password visibility" />
          </span>
        )}
      </div>
    </div>
  );
};

export default InputVariableForm;
