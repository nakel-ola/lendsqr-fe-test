import { CalendarIcon } from "@/components/icons";
import styles from "./title-card.module.scss";
import * as Popover from "@radix-ui/react-popover";
import { format } from "date-fns";
import { Calendar } from "@/components/calendar/calendar";

type Props = {
  label: string;
  value?: Date;
  onChange?: (value?: Date) => void;
};
export const DateCard = (props: Props) => {
  const { label, onChange, value } = props;
  return (
    <div className={styles.input_container}>
      <label htmlFor={label.toLowerCase()}>{label}</label>

      <Popover.Root>
        <Popover.Trigger className={styles.dropdown}>
          <p className="">{value ? format(value, "PPP") : "Date"}</p>

          <CalendarIcon />
        </Popover.Trigger>

        <Popover.Content side="bottom">
          <Calendar
            mode="single"
            selected={value}
            onSelect={onChange}
            initialFocus
            // classNames={{
            //   root: "!border-[1px] !border-subtle-dark bg-white rounded-md",
            // }}
          />
        </Popover.Content>
      </Popover.Root>
    </div>
  );
};
