"use server";

import { User } from "@/utils/users";

type ReturnType = {
  totalItems: number;
  results: User[];
};
export async function getUsers(): Promise<ReturnType> {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/users`, {
      method: "GET",
    });

    return res.json();
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
}
