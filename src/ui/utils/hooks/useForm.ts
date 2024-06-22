import { useState } from 'react';
import type { ChangeEvent } from 'react';

type FormFields = Record<string, string | number | boolean>;

interface UseFormReturn<T> {
  form: T;
  handlerChangeForm: (event: ChangeEvent<HTMLInputElement>) => void;
  handlerResetForm: () => void;
}

const useForm = <T extends FormFields>(initForm: T): UseFormReturn<T> => {
  const [form, setForm] = useState<T>(initForm);

  const handlerChangeForm = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const handlerResetForm = () => {
    setForm(initForm);
  };

  return { form, handlerChangeForm, handlerResetForm };
};

export default useForm;
