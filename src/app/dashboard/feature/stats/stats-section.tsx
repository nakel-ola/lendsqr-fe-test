import { SVGProps } from "react";
import styles from "./stats-section.module.scss";
import {
  LoanOrangeIcon,
  MoneyFuchsiaIcon,
  UserPurpleIcon,
  UsersPinkIcon,
} from "@/components/icons";

type Props = {};
export const StatsSection = (props: Props) => {
  return (
    <div className={styles.container}>
      <Card
        Icon={UsersPinkIcon}
        title="Users"
        value="2,453"
        iconClassName={styles.stats_card_pink_icon}
      />
      <Card
        Icon={UserPurpleIcon}
        title="Active Users"
        value="2,453"
        iconClassName={styles.stats_card_purple_icon}
      />
      <Card
        Icon={LoanOrangeIcon}
        title="Users with Loans"
        value="12,453"
        iconClassName={styles.stats_card_orange_icon}
      />
      <Card
        Icon={MoneyFuchsiaIcon}
        title="Users with Savings"
        value="102,453"
        iconClassName={styles.stats_card_red_icon}
      />
    </div>
  );
};

type CardProps = {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  value: string;
  iconClassName: string;
};

const Card = (props: CardProps) => {
  const { Icon, title, value, iconClassName } = props;
  return (
    <div className={styles.stats_card}>
      <div className={iconClassName}>
        <Icon />
      </div>

      <p className={styles.stats_card_title}>{title}</p>

      <p className={styles.stats_card_value}>{value}</p>
    </div>
  );
};
