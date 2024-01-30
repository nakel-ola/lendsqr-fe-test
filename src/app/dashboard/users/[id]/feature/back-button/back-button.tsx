"use client";

import { ArrowBack } from "@/components/icons";
import styles from "./back-button.module.scss";
import { useRouter } from "next/navigation";

type Props = {};
export const BackButton = () => {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} className={styles.container}>
      <ArrowBack />
      Back to Users
    </button>
  );
};
