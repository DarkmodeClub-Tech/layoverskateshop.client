import { Form } from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Image from "next/image";
import Link from "next/link";
import { z } from "zod";
import { api } from "../../../services/api";

const loginSchema = z.object({
  email: z
    .string()
    .email("Insira um email válido")
    .nonempty("O email é obrigatório"),
  password: z
    .string()
    .min(8, "A senha deve conter pelo menos 8 caracteres")
    .nonempty("A senha é obrigatória"),
});

export type TLoginRequest = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TLoginRequest>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<TLoginRequest> = async (data) => {
    // Aqui você pode fazer o que desejar com os dados do formulário
    console.log(data);

    const req = await api.post("/customers/auth", data);

    const authentication = req.data;
    localStorage.setItem(
      "@lvrsk8shop-auth-token",
      JSON.stringify(authentication.token)
    );
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Image src="/g1725-black.svg" alt="" width={60} height={60} />
      <fieldset>
        <legend>Login</legend>
        <label htmlFor="email">
          Email
          <input
            type="text"
            id="email"
            placeholder="example@gmail.com"
            {...register("email")}
          />
          <span> {errors && errors.email?.message}</span>
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="text"
            id="password"
            placeholder="********"
            {...register("password")}
          />
          <span> {errors && errors.password?.message}</span>
        </label>
        <button type="submit"> Entrar</button>
      </fieldset>
      <p>
        <span>Não possui uma conta? </span>
        <Link href="/register_user">Cadastrar</Link>
      </p>
    </Form>
  );
};
export default LoginForm;
