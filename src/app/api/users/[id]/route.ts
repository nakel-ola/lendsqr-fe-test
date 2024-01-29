import users from "@/data/users.json";

type Context = {
  params: {
    id: string;
  };
};
export async function GET(request: Request, context: Context) {
  const id = context.params.id;
  const user = users.find((user) => user.id.toString() === id);

  return Response.json(user);
}
