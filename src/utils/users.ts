export type User = {
  id: number;
  organization: string;
  username: string;
  email: string;
  phone_number: string;
  status: string;
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
