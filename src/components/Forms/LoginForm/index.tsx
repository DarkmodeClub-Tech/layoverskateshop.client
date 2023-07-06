import { Form } from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Image from "next/image";
import Link from "next/link";
import { z } from "zod";
import { api } from "../../../services/api";
import { setAuthToken } from "../../../services/cookies";
import { UserContext } from "../../../contexts/user.context";
import { useContext } from "react";
import { TLoginRequest } from "../../../interfaces/user";
import { loginSchema } from "../../../schemas/user.schemas";

const LoginForm = () => {
  const { login } = useContext(UserContext);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TLoginRequest>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <Form onSubmit={handleSubmit(login)}>
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
