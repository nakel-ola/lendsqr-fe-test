"use client";
import { useRef, useCallback, useState } from "react";

export interface UseControlledProps<T = number> {
  /**
   * Holds the component value when it's controlled.
   */
  controlled?: T;
  /**
   * The default value when uncontrolled.
   */
  defaultValue?: T;
}

export type UsePaginationResult<T> = [T, (newValue: T) => void];

export const useControlled = <T>(
  props: UseControlledProps<T>
): UsePaginationResult<T> => {
  const { controlled, defaultValue } = props;

  const controlledRef = useRef(controlled !== undefined);
  const [state, setState] = useState(defaultValue);

  const current = controlledRef.current;

  const value = current ? controlled : state;

  const setValue = useCallback(
    (newValue: T) => {
      if (!current) {
        setState(newValue);
      }
    },
    [current]
  );

  return [value as T, setValue];
};
