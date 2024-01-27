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

export const getUsersByOrganization = (users: User[], organization: string) => {
  // Your logic to fetch users by organization
  const filteredUsers = users.filter(
    (user) => user.organization === organization
  );
  return filteredUsers;
};

export const getUsersByUsername = (users: User[], username: string) => {
  // Your logic to fetch users by username
  const filteredUsers = users.filter((user) => user.username === username);
  return filteredUsers;
};

export const getUsersByStatus = (users: User[], status: string) => {
  // Your logic to fetch users by status
  const filteredUsers = users.filter((user) => user.status === status);
  return filteredUsers;
};

export const getUsersByEmail = (users: User[], email: string) => {
  // Your logic to fetch users by email
  const filteredUsers = users.filter((user) => user.email === email);
  return filteredUsers;
};

export const getUsersByJoinedDate = (users: User[], joined_at: string) => {
  // Your logic to fetch users by joined_at date
  const filteredUsers = users.filter((user) => user.joined_at === joined_at);
  return filteredUsers;
};

export const getUsersByPhoneNumber = (users: User[], phone_number: string) => {
  // Your logic to fetch users by phone_number
  const filteredUsers = users.filter(
    (user) => user.phone_number === phone_number
  );
  return filteredUsers;
};
