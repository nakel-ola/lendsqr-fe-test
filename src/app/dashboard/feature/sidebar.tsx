"use client";

import { Briefcase, ChevronDown } from "@/components/icons";
import styles from "./sidebar.module.scss";
import { usePathname, useRouter } from "next/navigation";
import { Fragment, SVGProps, useEffect, useRef } from "react";
import { navigation } from "../data/navigation";
import { useWindowSize } from "@/hooks/use-window-size";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import { AnimatePresence, motion } from "framer-motion";
import { useSidebarStore } from "../store/sidebar-store";

export const Sidebar = () => {
  return (
    <Fragment>
      <MobileWrapper />
      <div className={styles.container}>
        <Content />
      </div>
    </Fragment>
  );
};

const MobileWrapper = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { setIsOpen, isOpen } = useSidebarStore();

  const screen = useWindowSize();

  useOnClickOutside(ref, () => {
    if (screen && screen?.width < 1024) {
      setIsOpen(false);
    }
  });

  useEffect(() => {
    if (screen && screen?.width > 1024) {
      setIsOpen(false);
    }
  }, [screen, setIsOpen]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={styles.mobile_container}
        >
          <motion.div
            ref={ref}
            className={styles.mobile_wrapper}
            initial={{ marginLeft: "-70%" }}
            animate={{ marginLeft: "0%" }}
            exit={{ marginLeft: "-70%" }}
          >
            <Content />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

const Content = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <Fragment>
      <Card
        Icon={Briefcase}
        name="Switch Organization"
        isActive={false}
        onClick={() => {}}
        showMoreIcon
      />
      <div className={styles.nav_list}>
        {navigation.map(({ items, name }, index) => (
          <div key={index} className={styles.nav_list_card}>
            {name ? <p>{name}</p> : null}

            <div>
              {items.map(({ href, Icon, name }, inx) => (
                <Card
                  key={inx}
                  name={name}
                  Icon={Icon}
                  isActive={pathname === href}
                  onClick={() => router.push(href)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

type CardProps = {
  name: string;
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  isActive: boolean;
  onClick: () => void;
  showMoreIcon?: boolean;
};
const Card = (props: CardProps) => {
  const { name, Icon, isActive, onClick, showMoreIcon = false } = props;

  return (
    <div
      onClick={onClick}
      className={isActive ? styles.nav_card_active : styles.nav_card}
    >
      <span />
      <Icon height={24} width={24} className={styles.nav_card_icon} />

      <p>{name}</p>

      {showMoreIcon ? (
        <ChevronDown className={styles.nav_card_down_icon} />
      ) : null}
    </div>
  );
};
