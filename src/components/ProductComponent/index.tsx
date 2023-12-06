"use client";

import { ReactNode, useContext, useState } from "react";
import { TProduct } from "../../interfaces";
import { DeliveryCalculatorForm, ProductComponentContainer } from "./styles";
import ProductsSection from "../ProductsSection";
import { ProductsContext } from "../../app/contexts/product";
import {
  TCart,
  TCartProductObject,
  TCartProductRequest,
} from "../../interfaces/cart";
import { api } from "../../services/api";
import { UserContext } from "../../app/contexts/user";

export type TProductPageProps = {
  product: TProduct;
  children?: ReactNode;
};

export const ProductComponent = ({ product, children }: TProductPageProps) => {
  const { products } = useContext(ProductsContext);
  const { setCart } = useContext(UserContext);
  const [productImage, setProductImage] = useState(product.photos[0].url);

  const [cartProducts, setCartProducts] = useState<TCartProductObject[]>([]);

  const [amount, setAmount] = useState(1);
  const [reqColors, setReqColors] = useState<string[]>([]);
  const [reqSizes, setReqSizes] = useState<string[]>([]);

  const getSelectedSize = () => {
    const size = document.querySelector(
      'input[name="size"]:checked'
    ) as HTMLInputElement;

    return size.value;
  };

  const getSelectedColor = () => {
    const color = document.querySelector(
      'input[name="color"]:checked'
    ) as HTMLInputElement;

    return color.value;
  };

  const addProductToCart = async (product_id: string) => {
    const cartProduct = {
      product_id: product_id,
      amount: amount,
      requested_sizes: [getSelectedSize()],
      requested_colors: [getSelectedColor()],
    };

    setCartProducts((old_products) => [...old_products, cartProduct]);
    console.log(cartProducts);

    const cartReqData: TCartProductRequest = {
      products: cartProducts,
    };
    const res = await api.post("/cart/products", cartReqData);

    console.log(res.data);
    const cart: TCart = res.data;
    setCart(cart);
  };

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
          <fieldset className="fieldset-sizes-field" id="sizes">
            <legend>Tamanhos disponíveis:</legend>
            {product.available_sizes.map((pas) => (
              <label htmlFor={pas} key={pas}>
                {pas}
                <input type="radio" name="size" value={pas} />
              </label>
            ))}
          </fieldset>
          <fieldset className="fieldset-colors-field" id="colors">
            <legend>Cores disponíveis:</legend>
            {product.available_colors.map((pac) => (
              <label htmlFor={pac} key={pac}>
                {pac}
                <input type="radio" name="color" value={pac} />
              </label>
            ))}
          </fieldset>
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
          <button type="button" className="buy-product-button">
            Comprar agora
          </button>
          <button
            type="button"
            className="add-to-cart-button"
            onClick={() => addProductToCart(product.id)}
          >
            Adicionar ao Carrinho
          </button>
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
