import { ReactNode, useState } from "react";
import { TProduct } from "../../interfaces";
import { DeliveryCalculatorForm, ProductComponentContainer } from "./styles";

export type TProductPageProps = {
  product: TProduct;
  children?: ReactNode;
};

export const ProductComponent = ({ product, children }: TProductPageProps) => {
  const [productImage, setProductImage] = useState(product.photos[0].url);
  return (
    <ProductComponentContainer>
      <ul className="image-list">
        {product.photos.map((p) => {
          return (
            <li>
              <figure>
                <img src={p.url} alt="product photo" />
              </figure>
              <button className="button-image"></button>
            </li>
          );
        })}
      </ul>
      <figure className="bigger-figure">
        <img src={productImage} alt="bigger product image" />
      </figure>

      <section className="product-details-section">
        <p className="product-category">
          {`Categorias > ${product.category.title}`}
        </p>
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">
          {Number(product.price).toLocaleString("pt-BR", {
            currency: "BRL",
            style: "currency",
          })}
        </p>
        <p className="product-installments">
          em até {product.max_installments}x de{" "}
          {(Number(product.price) / product.max_installments).toLocaleString(
            "pt-BR",
            {
              currency: "BRL",
              style: "currency",
            }
          )}
        </p>
        <DeliveryCalculatorForm className="calculate-delivery-form">
          <fieldset>
            <legend>Calcular Frete</legend>
            <label htmlFor="cep">
              Digite o CEP
              <input type="text" id="cep" placeholder="00000000" />
            </label>
            <button type="submit">Calcular</button>
          </fieldset>
        </DeliveryCalculatorForm>
        <button className="buy-product-button">Comprar</button>
      </section>
    </ProductComponentContainer>
  );
};
