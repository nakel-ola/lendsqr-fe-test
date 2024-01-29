"use client";

import Link from "next/link";
import styles from "./page.module.scss";
import Image from "next/image";
import { Input } from "@/components/input/input";
import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  return (
    <main className={styles.main}>
      <section className={styles.leftSection}>
        {/* logo */}
        <Link href="/" className="">
          <Image
            src="/logo.svg"
            alt=""
            className={styles.logo}
            width={100}
            height={70}
          />
        </Link>
        {/* illustration */}

        <div className={styles.illustration}>
          <Image
            src="/31054d654669dbf388b2a9ec503f6495.png"
            alt=""
            className={styles.illustrationImage}
            width={300}
            height={300}
          />
        </div>
      </section>
      <section className={styles.rightSection}>
        {/* title */}

        <div className={styles.titleCard}>
          <h1>Welcome!</h1>
          <p className="">Enter details to login.</p>
        </div>

        {/* form */}

        <form action="" className={styles.form}>
          <Input placeholder="Email" />

          <Input
            placeholder="Password"
            type={isVisible ? "text" : "password"}
            endIcon={
              <button onClick={() => setIsVisible(!isVisible)} type="button">
                {isVisible ? "HIDE" : "SHOW"}
              </button>
            }
          />

          <div className="">
            <Link href="#">Forgot PASSWORD?</Link>
          </div>

          <button>LOG IN</button>
        </form>
      </section>
    </main>
  );
}
