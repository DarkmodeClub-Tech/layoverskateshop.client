import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .email("Insira um email válido")
    .nonempty("O email é obrigatório"),
  password: z
    .string()
    .min(8, "A senha deve conter pelo menos 8 caracteres")
    .nonempty("A senha é obrigatória"),
});
