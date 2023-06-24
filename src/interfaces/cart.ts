import { TProduct } from "./products";

export type TCartProduct = {
  id: string;
  cart_amount: number;
  requested_colors: string[];
  requested_sizes: string[];
  product: TProduct;
};

export type TCart = {
  id: string;
  products: TCartProduct[];
};
