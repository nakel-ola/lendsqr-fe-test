import { User } from "@/utils/users";
import styles from "./users-section.module.scss";
import { Filter, IcMoreVert } from "@/components/icons";

type Props = {
  users: User[];
};
export const UsersSection = (props: Props) => {
  const { users } = props;
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr className={styles.table_head_row}>
            <th>
              <div className="">
                <p className="">organization</p>
                <Filter className={styles.filter_icon} />
              </div>
            </th>
            <th>
              <div className="">
                <p className="">Username</p>
                <Filter className={styles.filter_icon} />
              </div>
            </th>
            <th>
              <div className="">
                <p className="">Email</p>
                <Filter className={styles.filter_icon} />
              </div>
            </th>
            <th>
              <div className="">
                <p className="">Phone number</p>
                <Filter className={styles.filter_icon} />
              </div>
            </th>
            <th>
              <div className="">
                <p className="">Date joined</p>
                <Filter className={styles.filter_icon} />
              </div>
            </th>
            <th>
              <div className="">
                <p className="">Status</p>
                <Filter className={styles.filter_icon} />
              </div>
            </th>

            <th className={styles.th_more}></th>
          </tr>
        </thead>

        <tbody className={styles.tbody}>
          {users.map((user) => (
            <tr key={user.id} className={styles.table_body_row}>
              <td>{user.organization}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone_number}</td>
              <td>{user.joined_at}</td>
              <td>
                <div className={styles[`status-${user.status}`]}>
                  <p className="">{user.status}</p>
                </div>
              </td>

              <td>
                <IcMoreVert className={styles.more_icon} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
