"use server";

import { User } from "@/utils/users";

type Args = {
  id: string;
};
export async function getUser({ id }: Args): Promise<User> {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/users/${id}`, {
      method: "GET",
    });

    return res.json();
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
}
