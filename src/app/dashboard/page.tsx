import { Fragment } from "react";
import styles from "./page.module.scss";
import { StatsSection, UsersSection } from "./feature";
import { getUsers } from "@/actions/get-users";

export default async function Dashboard() {
  const data = await getUsers();
  return (
    <Fragment>
      <h1 className={styles.heading_text}>Users</h1>

      <StatsSection />

      <UsersSection users={data.results} />
    </Fragment>
  );
}
