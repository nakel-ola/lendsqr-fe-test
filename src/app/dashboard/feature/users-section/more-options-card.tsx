"use client";

import styles from "./more-options-card.module.scss";
import { DeleteFriend, Eye, IcMoreVert, UserCheck } from "@/components/icons";
import * as Popover from "@radix-ui/react-popover";
import { useRouter } from "next/navigation";

type Props = {
  id: string;
};
export const MoreOptionsCard = ({ id }: Props) => {
  const router = useRouter();
  return (
    <Popover.Root>
      <Popover.Trigger className={styles.popover_trigger}>
        <IcMoreVert className={styles.more_icon} />
      </Popover.Trigger>

      <Popover.Content side="bottom" className={styles.popover_content}>
        <div
          onClick={() => router.push(`/dashboard/users/${id}`)}
          className={styles.popover_content_item}
        >
          <Eye />

          <p className="">View Details</p>
        </div>
        <div className={styles.popover_content_item}>
          <DeleteFriend />

          <p className="">Blacklist User</p>
        </div>
        <div className={styles.popover_content_item}>
          <UserCheck />

          <p className="">Activate User</p>
        </div>
      </Popover.Content>
    </Popover.Root>
  );
};
