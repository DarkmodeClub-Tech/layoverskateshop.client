import { useEffect, useContext } from "react";
import { api } from "../../services/api";
import { UserContext } from "../../contexts/user.context";
import { TCartProduct } from "../../interfaces";
import { LoadingElement } from "../../components/LoadingElement";

const CartPage = () => {
  const { user, cart, setCart, isLoading, setIsLoading } =
    useContext(UserContext);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {isLoading ? (
        <LoadingElement />
      ) : cart.products?.length > 0 ? (
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
