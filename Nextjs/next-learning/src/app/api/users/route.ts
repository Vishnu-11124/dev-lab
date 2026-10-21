import { employees } from "@/constants/data"

export const GET = async () => {
    return Response.json(employees)
}