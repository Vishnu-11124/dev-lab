export type DeveloperRole =
  | "Frontend Developer"
  | "Backend Developer"
  | "Full Stack Developer";

export type RecentWork = {
  title: string;
  description: string;
};

export type Developer = {
  devId: string;
  name: string;
  email: string;
  phone: string;
  role: DeveloperRole;
  experience: number; // years
  skills: string[];
  recentWorks: RecentWork[];
  image: string;
};

export interface EmployeeDetails {
  id: number;
  fullName: string;
  email: string;
  role: string;
  department: string;
  experience: number;
  location: string;
  salary: number;
  status: string;
}

export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};

export interface TodoDetails {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
