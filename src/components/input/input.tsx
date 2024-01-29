import { forwardRef } from "react";
import styles from "./input.module.scss";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, type, endIcon, startIcon, readOnly, ...rest } = props;
  return (
    <div className={styles.container}>
      {startIcon && <span>{startIcon}</span>}

      <input type={type} ref={ref} readOnly={readOnly} {...rest} />

      {endIcon && <span>{endIcon}</span>}
    </div>
  );
});

Input.displayName = "Input";
