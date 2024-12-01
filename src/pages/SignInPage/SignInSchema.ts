import { z } from "zod";

export const SignInSchema = z.object({
    email: z.string().trim().email(),
    password: z.string().min(1, "Password is required"),
});