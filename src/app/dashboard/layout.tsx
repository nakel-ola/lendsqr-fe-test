import styles from "./layout.module.scss";

import React, { PropsWithChildren } from "react";
import { Navbar, Sidebar } from "./feature";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <main className={styles.container}>
      <Navbar />

      <div className={styles.wrapper}>
        <Sidebar />

        <div className={styles.body}>{children}</div>
      </div>
    </main>
  );
}
