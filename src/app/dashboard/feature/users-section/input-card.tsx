import { InputHTMLAttributes } from "react";
import styles from "./title-card.module.scss";

type InputCardProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};
export const InputCard = (props: InputCardProps) => {
  const { label, id, name, ...rest } = props;
  return (
    <div className={styles.input_container}>
      <label htmlFor={id || name}>{label}</label>

      <input id={id} name={name} {...rest} />
    </div>
  );
};
