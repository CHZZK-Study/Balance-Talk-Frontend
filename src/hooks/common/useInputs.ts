import { useState, ChangeEvent, useCallback, FocusEvent } from 'react';

function useInputs<T>(initialState: T) {
  const [form, setForm] = useState<T>(initialState);

  const onChange = useCallback(
    (
      e: ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
      const { name, value } = e.target;
      setForm((prevForm) => ({ ...prevForm, [name]: value }));
    },
    [],
  );

  const onBlur = useCallback(
    (
      e: FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    ) => {
      const { name, value } = e.target;
      setForm((prevForm) => ({ ...prevForm, [name]: value.trim() }));
    },
  );

  const reset = useCallback(() => {
    setForm(initialState);
  }, [initialState]);

  const setEach = useCallback(<U>(name: string, value: U) => {
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  }, []);

  const setArray = useCallback(
    <P, K extends keyof T>(name: K, value: P, index: number) => {
      setForm((prevForm) => {
        if (Array.isArray(prevForm[name])) {
          const updatedArray = [...(prevForm[name] as P[])];
          updatedArray[index] = value;
          return { ...prevForm, [name]: updatedArray };
        }
        return prevForm;
      });
    },
    [],
  );

  return { form, onChange, reset, setEach, setArray, onBlur };
}

export default useInputs;
