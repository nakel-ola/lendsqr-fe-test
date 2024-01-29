"use client";

import { Star, User } from "@/components/icons";
import styles from "./user-info.module.scss";
import { useState } from "react";

export const UserInfo = () => {
  const [active, setActive] = useState(0);
  return (
    <section className={styles.container}>
      <div className={styles.top}>
        <div className={styles.user}>
          <div className={styles.avatar}>
            <User />
          </div>
          <div className={styles.user_name}>
            <p className={styles.name}>Grace Effiom</p>

            <p className={styles.uid}>LSQFf587g90</p>
          </div>
        </div>

        <hr className={styles.hr} />

        <div className={styles.user_tier}>
          <p className="">User’s Tier</p>

          <div className="">
            <Star />
            <Star />
            <Star />
          </div>
        </div>

        <hr className={styles.hr} />

        <div className={styles.user_amount}>
          <p className={styles.amount}>₦200,000.00</p>

          <p className={styles.account}>9912345678/Providus Bank</p>
        </div>
      </div>
      <div className={styles.tabs}>
        {[
          "General Details",
          "Documents",
          "Bank Details",
          "Loans",
          "Savings",
          "App and System",
        ].map((value, index) => (
          <div
            key={index}
            onClick={() => setActive(index)}
            className={active === index ? styles.tab_active : styles.tab}
          >
            <p className="">{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
