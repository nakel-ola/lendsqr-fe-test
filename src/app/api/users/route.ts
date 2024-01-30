import { removeDuplicates } from "@/utils/remove-duplicates";
import { User, getUsersWithPagination } from "@/utils/users";
import users from "@/data/users.json";
import { isSameDay } from "date-fns";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const organization = searchParams.get("organization");
    const email = searchParams.get("email");
    const username = searchParams.get("username");
    const phone_number = searchParams.get("phone_number");
    const status = searchParams.get("status");
    const joined_at = searchParams.get("joined_at");
    const page = searchParams.get("page") ?? 1;
    const pageSize = searchParams.get("pageSize") ?? 10;

    let filteredUsers: User[] = (users as User[]).filter((user) => {
      return (
        (!organization || user.organization.includes(organization)) &&
        (!username || user.username.includes(username)) &&
        (!email || user.email.includes(email)) &&
        (!phone_number || user.phone_number.includes(phone_number)) &&
        (!status || user.status === status) &&
        (!joined_at || isSameDay(new Date(user.joined_at), new Date(joined_at)))
      );
    });

    const newUsers = removeDuplicates(filteredUsers, "id");

    return Response.json({
      totalItems: newUsers.length,
      results: getUsersWithPagination(newUsers, Number(page), Number(pageSize)),
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
}
