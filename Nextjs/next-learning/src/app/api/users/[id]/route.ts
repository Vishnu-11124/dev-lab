import { employees } from "@/constants/data";

export const GET = async (
  _req: Request,
  { params }: { params: { id: string } },
) => {
  const { id } = await params;

  const user = employees.find((e) => e.id === Number(id));
  if (!user) {
    return Response.json({
      message: "User not found",
    });
  }

  return Response.json({
    message: "User data fetched successfully",
    data: user,
  });
};
