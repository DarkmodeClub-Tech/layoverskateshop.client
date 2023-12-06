import { TUser } from "@/interfaces";
import Link from "next/link";
import { MdOutlineShoppingCart } from "react-icons/md";
import { DropDownUserMenu } from "./DropdownMenu";

export const MenuNav = ({ user }: { user: TUser }) => {
  return (
    <section className="header-nav">
      <DropDownUserMenu user={user} />
    </section>
  );
};
