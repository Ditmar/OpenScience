import type { Story, Meta } from '@storybook/react';
import InputVariableForm from './InputVariableForm';
import '../../../../globals/_variables.scss';

export default {
  title: 'ui/components/atoms/InputVariableForm',
  component: InputVariableForm,
} as Meta;

const Template: Story<IProps> = (args) => <InputVariableForm {...args} />;

export const NameInput = Template.bind({});
NameInput.args = {
  label: 'Nombre',
  type: 'text',
  value: '',
  onChange: () => {},
};

export const EmailInput = Template.bind({});
EmailInput.args = {
  label: 'Email',
  type: 'email',
  value: '',
  onChange: () => {},
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  label: 'Contraseña',
  type: 'password',
  value: '',
  onChange: () => {},
};
