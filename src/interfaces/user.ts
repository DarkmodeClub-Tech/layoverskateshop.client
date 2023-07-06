import { z } from "zod";
import { TAddress } from "./address";
import { TCart } from "./cart";
import { loginSchema } from "../schemas/user.schemas";

export type TLoginRequest = z.infer<typeof loginSchema>;

export type TUser = {
  id: string;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  cpf: string;
  phone: string;
  is_adm: boolean;
  is_active: boolean;
  last_login: Date;
  last_logout: Date;
  created_at: Date;
  updated_at: Date;
  address: TAddress;
  cart: TCart;
};
