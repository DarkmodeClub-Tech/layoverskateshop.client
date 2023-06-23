import { ReactNode, useContext, useState } from "react";
import { TProduct } from "../../interfaces";
import { DeliveryCalculatorForm, ProductComponentContainer } from "./styles";
import ProductsSection from "../ProductsSection";
import { ProductsContext } from "../../contexts/product.context";

export type TProductPageProps = {
  product: TProduct;
  children?: ReactNode;
};

export const ProductComponent = ({ product, children }: TProductPageProps) => {
  const { products } = useContext(ProductsContext);
  const [productImage, setProductImage] = useState(product.photos[0].url);
  return (
    <>
      <ProductComponentContainer>
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
          <label className="label-sizes-field" htmlFor="sizes">
            Tamanhos disponíveis:
            <select name="sizes" id="sizes">
              {product.available_sizes.map((pas) => (
                <option defaultValue={pas}>{pas}</option>
              ))}
            </select>
          </label>
          {/* <span className="span-colors-field">
      Cores disponíveis:
      {product.available_colors.map((pas) => (
        <span>{pas}</span>
      ))}
    </span> */}
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
          <button className="buy-product-button">Comprar agora</button>
          <button className="add-to-cart-button">Adicionar ao Carrinho</button>
        </section>
      </ProductComponentContainer>
      <ProductsSection
        title="Produtos semelhantes"
        products={products.filter(
          (p) => p.category.title === product.category.title
        )}
      />
    </>
  );
};
