import React, { useState } from 'react';
import InputText from '../../atoms/input-text/InputText';
import StartButton from '../../atoms/start-button/StartButton';
import './LoginForm.scss';
import eye from '../../../../assets/icons/eye.svg?raw';
import Continue from '../../../../assets/icons/continue.svg?raw';
import type { IProps } from './types/IProps';

function LoginForm({ isValid, children, variant, onChangeValue }: IProps) {
  const [formData] = useState({
    email: '',
    password: '',
    name: '',
  });
  const { email, password, name } = formData;

  return (
    <div className="login__form">
      <InputText
        id="name"
        label="Nombre"
        type="text"
        name="name"
        value={name}
        placeholder=""
        isValid={isValid}
        onChangeValue={onChangeValue}
      />
      <InputText
        id="email"
        label="Email"
        type="email"
        name="email"
        value={email}
        placeholder=" "
        isValid={isValid}
        onChangeValue={onChangeValue}
      />
      <InputText
        id="password"
        label="Contraseña"
        type="password"
        name="password"
        value={password}
        placeholder=""
        isValid={isValid}
        onChangeValue={onChangeValue}
        eyeIcon={eye}
      />

      <div className="login__button">
        <StartButton
          variant={variant}
          onClick={() => {
            console.log('Login');
          }}
          icon={children === 'CONTINUAR' ? Continue : undefined}
        >
          {children}
        </StartButton>
      </div>
    </div>
  );
}

export default LoginForm;
