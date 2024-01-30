import { User } from "@/utils/users";
import styles from "./users-section.module.scss";
import { TitleCard } from "./title-card";
import { MoreOptionsCard } from "./more-options-card";
import { format } from "date-fns";
import Image from "next/image";

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
              <TitleCard title="organization" />
            </th>
            <th>
              <TitleCard title="Username" />
            </th>
            <th>
              <TitleCard title="Email" />
            </th>
            <th>
              <TitleCard title="Phone number" />
            </th>
            <th>
              <TitleCard title="Date joined" />
            </th>
            <th>
              <TitleCard title="Status" />
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
              <td>{format(new Date(user.joined_at), "MMM dd, yyyy p")}</td>
              <td>
                <div className={styles[`status-${user.status}`]}>
                  <p className="">{user.status}</p>
                </div>
              </td>

              <td>
                <MoreOptionsCard id={user.id.toString()} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {users.length === 0 ? (
        <div className={styles.empty}>
          <Image
            src="/empty.svg"
            alt=""
            width={200}
            height={200}
            className={styles.empty_image}
          />

          <p className="">No data</p>
        </div>
      ) : null}
    </div>
  );
};
