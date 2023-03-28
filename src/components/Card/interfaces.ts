export interface IProduct {
  photos: string[];
  name: string;
  price: number;
  category: string;
  description: string;
}

export interface ICardProps extends IProduct {}
