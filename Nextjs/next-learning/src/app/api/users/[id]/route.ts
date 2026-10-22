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

export const PATCH = async (
  req: Request,
  { params }: { params: { id: string } },
) => {
  try {
    const { id } = await params;
    const { experience } = await req.json();

    const user = employees.find((e) => e.id === Number(id));

    if (!user) {
      return Response.json({ message: "User not found" }, { status: 404 });
    }

    if (
      typeof experience !== "number" ||
      !Number.isFinite(experience) ||
      experience < 0
    ) {
      return Response.json(
        { message: "Experience must be a valid non-negative number" },
        { status: 400 },
      );
    }

    if (user.experience === experience) {
      return Response.json({
        message: "Experience is already up to date",
        data: user,
      });
    }

    user.experience = experience;

    return Response.json({
      message: "User experience updated successfully",
      data: user,
    });
  } catch {
    return Response.json(
      { message: "Invalid JSON request body" },
      { status: 400 },
    );
  }
};
