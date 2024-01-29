export type User = {
  id: number;
  organization: "lendsqr" | "irorun" | "quinu" | "dabshots" | "pixope";
  username: string;
  email: string;
  phone_number: string;
  status: "inactive" | "active" | "blacklisted" | "pending";
  joined_at: string;
};

export const getUsersWithPagination = (
  users: User[],
  page: number,
  pageSize: number
) => {
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  // Your logic to fetch users with pagination
  const paginatedUsers = users.slice(startIndex, endIndex);
  return paginatedUsers;
};
