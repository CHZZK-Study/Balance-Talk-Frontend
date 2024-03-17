import { ChangeEvent, useCallback } from 'react';

export const useFocusFalse = <T extends Record<string, boolean>>(form: T) => {
  const focus = useCallback(
    (event: ChangeEvent<HTMLFormElement>) => {
      const findFirstFalseKey = Object.keys(form).find((key) => !form[key]);

      const focusInput = Array.from(event.currentTarget.elements).find(
        (element): element is HTMLInputElement =>
          element.tagName === 'INPUT' &&
          element.getAttribute('name') === findFirstFalseKey,
      );
      focusInput?.focus();
    },
    [form],
  );

  return { focus };
};
