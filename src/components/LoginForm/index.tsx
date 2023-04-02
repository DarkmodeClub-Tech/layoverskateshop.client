import { Form } from "./styles";
import Image from "next/image";
import Link from "next/link";

const LoginForm = () => {
  return (
    <Form onSubmit={() => ""}>
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
