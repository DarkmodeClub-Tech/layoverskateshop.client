import { TCategory } from "./category";
import { TPhoto } from "./photo";

export type TPackaging = {
  id: string;
  packaging_type: string;
  box_length: number;
  box_height: number;
  box_width: number;
  box_weight: number;
};

export type TProduct = {
  id: string;
  title: string;
  price: number;
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
  seller: string;
  packaging: TPackaging;
};

export type TProductsResponse = {
  data: TProduct[];
};
