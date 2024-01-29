"use client";

import { Filter } from "@/components/icons";
import styles from "./title-card.module.scss";
import * as Popover from "@radix-ui/react-popover";
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { DropdownCard } from "./dropdown-card";
import { InputCard } from "./input-card";
import { DateCard } from "./date-card";

type Props = {
  title: string;
};

type Data = {
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  status: string;
  joined_at?: Date;
};

export const TitleCard = (props: Props) => {
  const { title } = props;

  const searchParams = useSearchParams();
  const router = useRouter();

  const [data, setData] = useState<Data>({
    organization: "",
    username: "",
    email: "",
    phoneNumber: "",
    status: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const applyFilter = () => {
    const params = new URLSearchParams(searchParams);
    const { email, organization, phoneNumber, status, username } = data;

    if (email) params.set("email", email.toString());
    if (organization) params.set("organization", organization.toString());
    if (phoneNumber) params.set("phoneNumber", phoneNumber.toString());
    if (status) params.set("status", status.toString());
    if (username) params.set("username", username.toString());

    router.push(`/dashboard?` + params.toString());
  };

  const reset = () => {
    const params = new URLSearchParams(searchParams);

    params.delete("email");
    params.delete("organization");
    params.delete("phoneNumber");
    params.delete("status");
    params.delete("username");
    params.delete("joined_at");

    setData({
      organization: "",
      username: "",
      email: "",
      phoneNumber: "",
      status: "",
    });

    router.push(`/dashboard?` + params.toString());
  };

  useEffect(() => {
    const organization = searchParams.get("organization") ?? "";
    const email = searchParams.get("email") ?? "";
    const username = searchParams.get("username") ?? "";
    const phone_number = searchParams.get("phone_number") ?? "";
    const status = searchParams.get("status") ?? "";
    const joined_at = searchParams.get("joined_at");

    setData({
      email,
      username,
      phoneNumber: phone_number,
      status,
      organization,
      joined_at: joined_at ? new Date(joined_at) : undefined,
    });
  }, [searchParams]);
  return (
    <div className={styles.container}>
      <p className="">{title}</p>

      <Popover.Root>
        <Popover.Trigger className={styles.popover_trigger}>
          <Filter className={styles.filter_icon} />
        </Popover.Trigger>

        <Popover.Content side="bottom" className={styles.popover_content}>
          <DropdownCard
            label="Organization"
            items={["lendsqr", "irorun", "quinu", "dabshots", "pixope"]}
            value={data.organization}
            onChange={(value) => setData({ ...data, organization: value })}
          />

          <InputCard
            label="Username"
            type="text"
            placeholder="User"
            name="username"
            value={data.username}
            onChange={handleChange}
          />
          <InputCard
            label="Email"
            type="text"
            placeholder="Email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />

          <DateCard
            label="Date"
            value={data.joined_at}
            onChange={(value) => setData({ ...data, joined_at: value })}
          />
          <InputCard
            label="Phone Number"
            type="text"
            placeholder="Phone Number"
            name="phoneNumber"
            value={data.phoneNumber}
            onChange={handleChange}
          />

          <DropdownCard
            label="Status"
            items={["inactive", "active", "blacklisted", "pending"]}
            value={data.status}
            onChange={(value) => setData({ ...data, status: value })}
          />

          <div className={styles.button_container}>
            <button className={styles.button_reset} onClick={reset}>
              Reset
            </button>
            <button className={styles.button_filter} onClick={applyFilter}>
              Filter
            </button>
          </div>
        </Popover.Content>
      </Popover.Root>
    </div>
  );
};
