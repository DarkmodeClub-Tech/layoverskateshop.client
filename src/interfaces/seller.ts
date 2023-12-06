import { TAddress } from "./address";
import { TPhoto } from "./photo";

export type TSeller = {
  id: string;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  cpf: string;
  phone: string;
  is_active: true;
  last_login: Date;
  last_logout: Date;
  created_at: Date;
  updated_at: Date;
  adm: true;
  address: TAddress;
  cover_photos: TPhoto[];
  avatar: TPhoto | null;
};
