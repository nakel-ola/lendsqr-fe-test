import users from "@/data/users.json";
import { removeDuplicates } from "@/utils/remove-duplicates";
import {
  getUsersByEmail,
  getUsersByJoinedDate,
  getUsersByOrganization,
  getUsersByPhoneNumber,
  getUsersByStatus,
  getUsersByUsername,
  getUsersWithPagination,
} from "@/utils/users";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const organization = searchParams.get("organization");
  const email = searchParams.get("email");
  const username = searchParams.get("username");
  const phone_number = searchParams.get("phone_number");
  const status = searchParams.get("status");
  const joined_at = searchParams.get("joined_at");
  const page = searchParams.get("page") ?? 1;
  const pageSize = searchParams.get("pageSize") ?? 10;

  let filteredUsers = users;

  if (organization) {
    filteredUsers = [...users, ...getUsersByOrganization(users, organization)];
  }
  if (email) {
    filteredUsers = [...users, ...getUsersByEmail(users, email)];
  }
  if (username) {
    filteredUsers = [...users, ...getUsersByUsername(users, username)];
  }
  if (phone_number) {
    filteredUsers = [...users, ...getUsersByPhoneNumber(users, phone_number)];
  }
  if (status) {
    filteredUsers = [...users, ...getUsersByStatus(users, status)];
  }
  if (joined_at) {
    filteredUsers = [...users, ...getUsersByJoinedDate(users, joined_at)];
  }

  const newUsers = removeDuplicates(filteredUsers, "id");

  return Response.json({
    totalItems: newUsers.length,
    results: getUsersWithPagination(newUsers, Number(page), Number(pageSize)),
  });
}
