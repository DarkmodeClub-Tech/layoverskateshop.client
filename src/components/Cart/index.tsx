import Link from "next/link";
import { TCart, TCartProduct } from "../../interfaces";
import { CartContainerSection } from "./styles";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/user.context";

type TCartProps = {
  cart: TCart;
};

export const Cart = () => {
  const { cart } = useContext(UserContext);

  const [products, setProducts] = useState<TCartProduct[]>([]);
  useEffect(() => {
    setProducts(cart?.products);
  }, [cart]);

  return (
    <CartContainerSection>
      {products?.length > 0 ? (
        <ul className="product-list-ul">
          {products.map((p) => (
            <li key={p.product.id}>
              <Link href={`/${p.product.id}`}>
                <img
                  className="product-img"
                  src={p.product.photos[0].url}
                  alt="product photo"
                />
                <div className="product-details-div">
                  <p>{p.product.title}</p>
                  <p>Tamanho: {p.requested_sizes[0]}</p>
                  <p>Cor: {p.requested_colors[0]}</p>
                  <p>Quantidade: {p.cart_amount}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <h1>Seu carrinho está vazio.</h1>
      )}
    </CartContainerSection>
  );
};
