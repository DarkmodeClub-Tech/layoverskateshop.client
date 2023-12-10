import { TProduct } from "@/interfaces";

export const ProductButtonsField = ({ product }: { product: TProduct }) => {
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

  const amount = 1;
  const addProductToCart = async (product_id: string) => {
    const cartProduct = {
      product_id: product_id,
      amount: amount,
      requested_sizes: [getSelectedSize()],
      requested_colors: [getSelectedColor()],
    };

    // setCartProducts((old_products) => [...old_products, cartProduct]);
    // console.log(cartProducts);
    // const cartReqData: TCartProductRequest = {
    //   products: cartProducts,
    // };
    // const res = await api.post("/cart/products", cartReqData);
    // console.log(res.data);
    // const cart: TCart = res.data;
    // setCart(cart);
  };
  return (
    <div className="button-container">
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
    </div>
  );
};
