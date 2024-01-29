"use server";

import { addSearchParamsToUrl } from "@/utils/add-search-params-to-url";
import { User } from "@/utils/users";

type ReturnType = {
  totalItems: number;
  results: User[];
};

type Args = {
  page: string;
  pageSize: string;
  organization: string;
  email: string;
  username: string;
  phone_number: string;
  status: string;
  joined_at: string;
};
export async function getUsers(args: Args): Promise<ReturnType> {
  try {
    const {
      page,
      pageSize,
      email,
      joined_at,
      organization,
      phone_number,
      status,
      username,
    } = args;

    const url = addSearchParamsToUrl(`${process.env.BASE_URL}/api/users`, {
      page,
      pageSize,
      email,
      joined_at,
      organization,
      phone_number,
      status,
      username,
    });
    const res = await fetch(url, {
      method: "GET",
    });

    return res.json();
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
}
