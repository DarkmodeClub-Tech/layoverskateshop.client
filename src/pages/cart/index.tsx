import { useEffect, useContext } from "react";
import { api } from "../../services/api";
import { UserContext } from "../../contexts/user.context";
import { TCartProduct } from "../../interfaces";

const CartPage = () => {
  const { user, cart, setCart } = useContext(UserContext);

  return (
    <>
      {cart.products?.length > 0 ? (
        <ul>
          {cart.products.map((cp: TCartProduct) => {
            return <li>{cp.product.title}</li>;
          })}
        </ul>
      ) : (
        <h1> Seu Carrinho está vazio!</h1>
      )}
    </>
  );
};
export default CartPage;
