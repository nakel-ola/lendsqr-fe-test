import {
  BadgePercent,
  Bank,
  Briefcase,
  ChartBar,
  ClipboardList,
  CoinsSolid,
  Galaxy,
  HandshakeRegular,
  Home,
  Loan,
  PiggyBank,
  Sack,
  Scroll,
  SlidersH,
  Transaction,
  UserCheck,
  UserCog,
  UserFriends,
  UserTimes,
  Users,
} from "@/components/icons";

const basePath = "/dashboard";

export const navigation = [
  {
    name: null,
    items: [
      {
        name: "Dashboard",
        Icon: Home,
        href: `${basePath}/#`,
      },
    ],
  },
  {
    name: "CUSTOMERS",
    items: [
      {
        name: "Users",
        Icon: UserFriends,
        href: `${basePath}`,
      },
      {
        name: "Guarantors",
        Icon: Users,
        href: `${basePath}/#`,
      },
      {
        name: "Loans",
        Icon: Sack,
        href: `${basePath}/#`,
      },
      {
        name: "Decision Models",
        Icon: HandshakeRegular,
        href: `${basePath}/requests`,
      },
      {
        name: "Savings",
        Icon: PiggyBank,
        href: `${basePath}/agreements`,
      },
      {
        name: "Loan Requests",
        Icon: Loan,
        href: `${basePath}/maintenance`,
      },
      {
        name: "Whitelist",
        Icon: UserCheck,
        href: `${basePath}/payments`,
      },
      {
        name: "Karma",
        Icon: UserTimes,
        href: `${basePath}/#`,
      },
    ],
  },
  {
    name: "BUSINESSES",
    items: [
      {
        name: "Organization",
        Icon: Briefcase,
        href: `${basePath}/support`,
      },
      {
        name: "Loan Products",
        Icon: Loan,
        href: `${basePath}/settings`,
      },
      {
        name: "Savings Products",
        Icon: Bank,
        href: `${basePath}/settings`,
      },
      {
        name: "Fees and Charges",
        Icon: CoinsSolid,
        href: `${basePath}/support`,
      },
      {
        name: "Transactions",
        Icon: Transaction,
        href: `${basePath}/#`,
      },
      {
        name: "Services",
        Icon: Galaxy,
        href: `${basePath}/#`,
      },
      {
        name: "Service Account",
        Icon: UserCog,
        href: `${basePath}/#`,
      },
      {
        name: "Settlements",
        Icon: Scroll,
        href: `${basePath}/#`,
      },
      {
        name: "Reports",
        Icon: ChartBar,
        href: `${basePath}/#`,
      },
    ],
  },
  {
    name: "SETTINGS",
    items: [
      {
        name: "Preferences",
        Icon: SlidersH,
        href: `${basePath}/#`,
      },
      {
        name: "Fees and Pricing",
        Icon: BadgePercent,
        href: `${basePath}/#`,
      },
      {
        name: "Audit Logs",
        Icon: ClipboardList,
        href: `${basePath}/#`,
      },
    ],
  },
];
