import styles from "./details-card.module.scss";

type Props = {
  title: string;
  items: {
    name: string;
    value: string;
  }[];
};
export const DetailsCard = (props: Props) => {
  const { items, title } = props;
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>

      <div className={styles.items}>
        {items.map((item, index) => (
          <div key={index} className={styles.item}>
            <p className={styles.name}>{item.name}</p>
            <p className={styles.value}>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
