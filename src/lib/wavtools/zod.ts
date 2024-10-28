import { object, string } from "zod";

export const signInSchema = object({
  email: string().email("Invalid email").nonempty("Email is required"),
  password: string()
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password must be less than 32 characters"),
});