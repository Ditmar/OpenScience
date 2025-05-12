import type { Meta, StoryObj } from "@storybook/react";
import MainInput from "./MainInput";

const meta: Meta<typeof MainInput> = {
  title: "Components/MainInput",
  component: MainInput,
};

export default meta;

type Story = StoryObj<typeof MainInput>;

// ✅ define los íconos después del export default
const LeftIcon = () => <span>📧</span>;
const RightIcon = () => <span>❌</span>;

export const Default: Story = {
  args: {
    label: "Nombre",
    placeholder: "Ingresa tu nombre",
    value: "",
    onChange: () => {},
  },
};

export const WithIcons: Story = {
  args: {
    label: "Correo",
    placeholder: "correo@ejemplo.com",
    value: "",
    onChange: () => {},
    leftIcon: <LeftIcon />,
    rightIcon: <RightIcon />,
  },
};

export const WithHint: Story = {
  args: {
    label: "Usuario",
    placeholder: "usuario123",
    value: "",
    onChange: () => {},
    hint: "Debe tener al menos 6 caracteres",
  },
};

export const WithError: Story = {
  args: {
    label: "Contraseña",
    placeholder: "********",
    value: "",
    onChange: () => {},
    error: "Campo obligatorio",
  },
};
