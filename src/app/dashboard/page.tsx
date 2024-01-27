import { Fragment } from "react";
import styles from "./page.module.scss";
import { StatsSection, UsersSection } from "./feature";

export default function Dashboard() {
  return (
    <Fragment>
      <h1 className={styles.heading_text}>Users</h1>

      <StatsSection />

      <UsersSection />
    </Fragment>
  );
}
