import { Fragment } from "react";
import styles from "./page.module.scss";
import { PaginationCard, StatsSection, UsersSection } from "./feature";
import { getUsers } from "@/actions/get-users";

type Props = {
  searchParams: {
    page: string;
    pageSize: string;
    organization: string;
    email: string;
    username: string;
    phone_number: string;
    status: string;
    joined_at: string;
  };
};

export default async function Dashboard(props: Props) {
  const {
    searchParams: {
      page = "1",
      pageSize = "10",
      email,
      joined_at,
      organization,
      phone_number,
      status,
      username,
    },
  } = props;
  const data = await getUsers({
    page,
    pageSize,
    email,
    joined_at,
    organization,
    phone_number,
    status,
    username,
  });

  const pageCount = Math.ceil(data.totalItems / Number(pageSize));

  return (
    <Fragment>
      <h1 className={styles.heading_text}>Users</h1>

      <StatsSection />

      <UsersSection users={data.results} />

      <PaginationCard
        page={Number(page)}
        pageCount={pageCount}
        pageSize={Number(pageSize)}
      />
    </Fragment>
  );
}
