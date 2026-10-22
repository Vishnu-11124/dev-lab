import { employees } from "@/constants/data";

export const GET = async () => {
  return Response.json(employees);
};

export const POST = async (req: Request) => {
  try {
    const data = await req.json();
    // Validate the request body
    if (!data || typeof data !== "object" || Array.isArray(data)) {
      return Response.json(
        { message: "Valid employee data is required!" },
        { status: 400 },
      );
    }

    // Check required fields
    if (!data.id || !data.fullName || !data.email || !data.role) {
      return Response.json(
        { message: "ID, full name, email, and role are required!" },
        { status: 400 },
      );
    }

    // Check for an existing employee ID
    const existingData = employees.find((e) => e.id === data.id);

    if (existingData) {
      return Response.json(
        { message: "Employee ID already exists!" },
        { status: 409 },
      );
    }

    // Add the new employee
    employees.push(data);

    return Response.json(
      {
        message: "New employee added successfully!",
        data,
      },
      { status: 201 },
    );
  } catch {
    return Response.json(
      { message: "Invalid JSON request body!" },
      { status: 400 },
    );
  }
};
