import { useCallback, useState } from 'react';

export const useActiveSubmit = <T>(successState: T) => {
  const [successForm, setSuccessForm] = useState<T>(successState);
  const onSuccessChange = useCallback((name: string, value: boolean) => {
    setSuccessForm((prevForm) => ({ ...prevForm, [name]: value }));
  }, []);
  return { successForm, onSuccessChange };
};
