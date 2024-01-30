"use client";

import * as React from "react";
import { DayPicker } from "react-day-picker";
import { ChevronDown } from "../icons";
import styles from "./calendar.module.scss";
// import "react-day-picker/dist/style.css";
import "react-day-picker/dist/style.css";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

export const Calendar = (props: CalendarProps) => {
  const { className, classNames, showOutsideDays = true, ...rest } = props;
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={`${styles.container} ${className}`}
      // classNames={{
      //   months: styles.months,
      // }}
      // styles={{
      //   months: {
      //     display: "block",
      //     flexDirection: "column",
      //   },
      // }}
      components={{
        IconLeft: ({ ...props }) => (
          <ChevronDown className={styles.calender_previous} />
        ),
        IconRight: ({ ...props }) => (
          <ChevronDown className={styles.calender_next} />
        ),
      }}
      {...props}
    />
  );
};
