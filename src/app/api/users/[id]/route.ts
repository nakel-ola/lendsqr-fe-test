import users from "@/data/users.json";
import { NextResponse } from "next/server";

type Context = {
  params: {
    id: string;
  };
};

export async function GET(request: Request, context: Context) {
  try {
    const id = context.params.id;
    const user = users.find((user) => user.id.toString() === id);

    if (!user) throw new Error("Not found");

    return NextResponse.json(user);
  } catch (error: any) {
    throw new Error(error.message);
  }
}
