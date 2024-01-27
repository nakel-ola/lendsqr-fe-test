import { Fragment } from "react";
import styles from "./page.module.scss";
import { StatsSection } from "./feature";

export default function Dashboard() {
  return (
    <Fragment>
      <h1 className={styles.heading_text}>Users</h1>

      <StatsSection />
    </Fragment>
  );
}
