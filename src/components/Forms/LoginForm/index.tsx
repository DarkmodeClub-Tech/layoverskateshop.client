import { Form } from "./styles";
import { useForm } from "react-hook-form";

import Image from "next/image";
import Link from "next/link";
import { z } from "zod";

const LoginForm = () => {
  const loginSchema = z.object({
    email: z
      .string()
      .email("Insira um email válido")
      .nonempty("O email é obrigatório"),
    password: z
      .string()
      .min(6, "A senha deve conter pelo menos 6 caracteres")
      .nonempty("A senha é obrigatória"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    // Aqui você pode fazer o que desejar com os dados do formulário
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Image src="/g1725-black.svg" alt="" width={60} height={60} />
      <fieldset>
        <legend>Login</legend>
        <label htmlFor="email">
          Email
          <input type="text" id="email" placeholder="example@gmail.com" />
          <span></span>
        </label>
        <label htmlFor="password">
          Senha
          <input type="text" id="password" placeholder="********" />
          <span></span>
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
function zodResolver(
  schema: any
):
  | import("react-hook-form").Resolver<
      import("react-hook-form").FieldValues,
      any
    >
  | undefined {
  throw new Error("Function not implemented.");
}
