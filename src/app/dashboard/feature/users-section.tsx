import { Table, TableHead, TableHeader, TableRow } from "@/components/table";
import styles from "./users-section.module.scss";
import { Filter } from "@/components/icons";

type Props = {};
export const UsersSection = (props: Props) => {
  return (
    <div className={styles.container}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              organization
              <Filter className={styles.filter_icon} />
            </TableHead>
            <TableHead>
              Username
              <Filter className={styles.filter_icon} />
            </TableHead>
            <TableHead>
              Email
              <Filter className={styles.filter_icon} />
            </TableHead>
            <TableHead>
              Phone number
              <Filter className={styles.filter_icon} />
            </TableHead>
            <TableHead>
              Date joined
              <Filter className={styles.filter_icon} />
            </TableHead>
            <TableHead>
              Status
              <Filter className={styles.filter_icon} />
            </TableHead>
          </TableRow>
        </TableHeader>
      </Table>
    </div>
  );
};
