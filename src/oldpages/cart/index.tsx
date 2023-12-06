import { useEffect, useContext } from "react";
import { api } from "../../services/api";
import { UserContext } from "../../app/contexts/user";
import { TCartProduct } from "../../interfaces";
import { LoadingElement } from "../../components/LoadingElement";
import { Cart } from "../../components/Cart";

const CartPage = () => {
  const { user, cart, setCart, isLoading, setIsLoading } =
    useContext(UserContext);

  useEffect(() => {
    // setTimeout(() => {
    setIsLoading(false);
    // }, 2000);
  }, []);
  return <>{isLoading ? <LoadingElement /> : <Cart />}</>;
};
export default CartPage;
