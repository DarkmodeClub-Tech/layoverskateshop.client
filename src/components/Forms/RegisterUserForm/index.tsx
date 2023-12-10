"use client";

import Image from "next/image";
import { useState } from "react";

import { Form } from "./styles";

const RegisterUser = () => {
  const [firstStep, setFirstStep] = useState(true);
  const [nextStep, setNextStep] = useState(false);

  const followToNextStep = () => {
    if (firstStep && !nextStep) {
      setFirstStep(false);
      setNextStep(true);
      return;
    }

    setNextStep(false);
  };

  const backStep = () => {
    if (!firstStep && !nextStep) {
      setFirstStep(false);
      setNextStep(true);
      return;
    }

    setNextStep(false);
    setFirstStep(true);
  };

  return (
    <Form>
      {firstStep ? (
        <>
          <Image src="/g1725-black.svg" alt="" width={60} height={60} />
          <fieldset>
            <legend>Cadastrar</legend>

            <label htmlFor="email">
              Email:
              <input type="text" id="email" placeholder="example@gmail.com" />
              <span></span>
            </label>
            <label htmlFor="password">
              Senha:
              <input type="password" id="password" placeholder="********" />
              <span></span>
            </label>
            <label htmlFor="confirm-password">
              Confirmar Senha:
              <input
                type="password"
                id="confirm-password"
                placeholder="********"
              />
              <span></span>
            </label>

            <div className="form-button-container">
              <button type="button" onClick={followToNextStep}>
                Próximo
              </button>
            </div>
          </fieldset>
        </>
      ) : nextStep ? (
        <fieldset>
          <legend>Dados pessoais</legend>

          <label htmlFor="firstname">
            Nome:
            <input type="text" id="firstname" placeholder="João" />
            <span></span>
          </label>

          <label htmlFor="lastname">
            Sobrenome:
            <input type="text" id="lastname" placeholder="Silva" />
            <span></span>
          </label>
          <label htmlFor="phone">
            Telefone:
            <input type="tel" id="phone" placeholder="83 000000222" />
            <span></span>
          </label>
          <label htmlFor="cpf">
            CPF:
            <input type="number" id="cpf" placeholder="00000000000" />
            <span></span>
          </label>

          <div className="form-button-container">
            <button type="button" onClick={backStep}>
              Voltar
            </button>

            <button type="button" onClick={followToNextStep}>
              Próximo
            </button>
          </div>
        </fieldset>
      ) : (
        <fieldset>
          <legend>Endereço</legend>
          <label htmlFor="cep">
            CEP:
            <input type="number" id="cep" placeholder="00000000" />
            <span></span>
          </label>
          <label htmlFor="street">
            Rua:
            <input type="text" id="street" placeholder="Rua das Palmeiras" />
            <span></span>
          </label>
          <label htmlFor="number">
            Numero:
            <input type="number" id="number" placeholder="200" />
            <span></span>
          </label>
          <label htmlFor="complement">
            Complemento:
            <input type="text" id="complement" placeholder="opcional" />
            <span></span>
          </label>
          <label htmlFor="district">
            Bairro:
            <input type="text" id="district" placeholder="Catolé" />
            <span></span>
          </label>

          <div className="form-button-container">
            <button type="button" onClick={backStep}>
              Voltar
            </button>
            <button type="submit">Cadastrar</button>
          </div>
        </fieldset>
      )}
    </Form>
  );
};
export default RegisterUser;
