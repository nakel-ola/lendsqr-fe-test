import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import styles from "./title-card.module.scss";
import { Checkmark, ChevronDown } from "@/components/icons";

type Props = {
  items: string[];
  value: string;
  onChange: (value: string) => void;
  label: string;
};
export const DropdownCard = (props: Props) => {
  const { items, value, label, onChange } = props;
  return (
    <div className={styles.input_container}>
      <label htmlFor={label.toLowerCase()}>{label}</label>

      <DropdownMenuPrimitive.Root>
        <DropdownMenuPrimitive.Trigger className={styles.dropdown}>
          <p className="">Select</p>

          <ChevronDown />
        </DropdownMenuPrimitive.Trigger>

        <DropdownMenuPrimitive.Portal>
          <DropdownMenuPrimitive.Content className={styles.dropdown_content}>
            {items.map((item, index) => (
              <DropdownMenuPrimitive.Item
                key={index}
                onClick={() => onChange(item)}
                className={styles.dropdown_item}
              >
                <p className="">{item}</p>

                {value?.toLowerCase() === item.toLowerCase() ? (
                  <Checkmark />
                ) : null}
              </DropdownMenuPrimitive.Item>
            ))}
          </DropdownMenuPrimitive.Content>
        </DropdownMenuPrimitive.Portal>
      </DropdownMenuPrimitive.Root>
    </div>
  );
};
