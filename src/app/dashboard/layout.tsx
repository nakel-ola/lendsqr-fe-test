import styles from "./layout.module.scss";

import React, { PropsWithChildren } from "react";
import { Navbar } from "./feature";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className={styles.container}>
      <Navbar />

      <div className={styles.wrapper}>
        <div className={styles.sidebar}></div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
}
