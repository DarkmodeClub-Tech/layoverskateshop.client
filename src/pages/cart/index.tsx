import { useEffect, useState } from "react";
import { api } from "../../services/api";

const CartPage = () => {
  const [cartProducts, setCartProducts] = useState();
  useEffect(() => {
    const getToken = async () => {
      const token = localStorage.getItem("@lvrsk8shop-token");

      if (token) {
        const res = await api.get("customers", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setCartProducts(res.data.cart.products);
      }
    };
    getToken();
  }, []);

  return (
    <ul>
      {/* {cartProducts.map((cp) => {
        return <li>{cp}</li>;
      })} */}
    </ul>
  );
};
export default CartPage;
