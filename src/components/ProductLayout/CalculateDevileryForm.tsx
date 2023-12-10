import { TProduct } from "@/interfaces";
import { ProductLayoutForm } from "./styles";

export const DeliveryCalculateForm = ({ product }: { product: TProduct }) => {
  return (
    <ProductLayoutForm className="calculate-delivery-form">
      <fieldset>
        <legend>Calcular Frete</legend>
        <label htmlFor="cep">
          Digite o CEP
          <input type="text" id="cep" placeholder="00000000" />
        </label>
        <button type="submit">Calcular</button>
      </fieldset>
    </ProductLayoutForm>
  );
};
