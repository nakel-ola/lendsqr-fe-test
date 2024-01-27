"use client";

import Link from "next/link";
import styles from "./navbar.module.scss";
import Image from "next/image";
import { DropdownIcon, Notification, Search } from "@/components/icons";
import { FormEvent } from "react";
import { Hamburger } from "@/components/hamburger";
import { useSidebarStore } from "../store/sidebar-store";

export const Navbar = () => {
  const { setIsOpen, isOpen } = useSidebarStore();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className={styles.container}>
      {/* logo */}

      <div className={styles.left}>
        <Hamburger
          className={styles.left_hamburger}
          onToggle={setIsOpen}
          toggled={isOpen}
          direction="right"
          size={20}
        />
        <Link href="/">
          <Image
            src="/logo.svg"
            alt=""
            className={styles.logo}
            width={100}
            height={70}
          />
        </Link>
      </div>

      {/* search bar */}

      <form onSubmit={handleSubmit} className={styles.searchbar}>
        <input type="text" className="" placeholder="Search for anything" />

        <button type="submit">
          <Search />
        </button>
      </form>

      <div className={styles.right}>
        {/* docs link */}

        <Link href="#" className={styles.doc_link}>
          Docs
        </Link>

        {/* bell icon */}

        <Notification className={styles.bell_icon} />

        {/* user */}

        <div className={styles.user_card}>
          <Image
            src="/72489965cfe49416e536ab3ac00e669a.png"
            alt=""
            className={styles.user_card_image}
            width={60}
            height={60}
          />

          <p className="">Adedeji</p>

          <DropdownIcon />
        </div>
      </div>
    </div>
  );
};
