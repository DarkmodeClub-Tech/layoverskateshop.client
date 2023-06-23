import { TCategory } from "./category";
import { TPhoto } from "./photo";

export type TProduct = {
  id: string;
  title: string;
  price: string;
  max_installments: number;
  description: string;
  available: boolean;
  available_colors: string[];
  available_sizes: string[];
  stock_amount: number;
  created_at: Date;
  updated_at: Date;
  category: TCategory;
  photos: TPhoto[];
};

export type TProductsResponse = {
  data: TProduct[];
};
