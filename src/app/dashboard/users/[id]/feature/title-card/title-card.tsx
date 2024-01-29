import styles from "./title-card.module.scss";

type Props = {};
export const TitleCard = (props: Props) => {
  return (
    <div className={styles.container}>
      <p className="">User Details</p>

      <div className={styles.btns}>
        <button className={styles.btn_red}>Blacklist User</button>
        <button className={styles.btn_primary}>Activate User</button>
      </div>
    </div>
  );
};
