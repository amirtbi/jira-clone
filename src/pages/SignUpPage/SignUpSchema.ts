import { z } from "zod";

export const SignUpSchema = z.object({
    name: z.string().min(1, "Required"),
    email: z.string().trim().email(),
    password: z.string().min(8, "Min of 8 chars is required"),
});
