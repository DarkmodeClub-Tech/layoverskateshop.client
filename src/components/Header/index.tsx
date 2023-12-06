"use client";

import Image from "next/image";
import Link from "next/link";
import { StyledHeader } from "./styles";
import Navbar from "../Navbar";
import { SearchField } from "./SearchField";
import { TCategory, TProduct, TUser } from "@/interfaces";
import { MenuNav } from "./MenuNav";
import { MdOutlineShoppingCart } from "react-icons/md";

const Header = ({
  user,
  products,
  categories,
}: {
  user?: TUser;
  products: TProduct[];
  categories: TCategory[];
}) => {
  const cartProductsAmount = user?.cart.products.length;

  return (
    <>
      <StyledHeader>
        <Link href="/" className="logo_container">
          <Image src="/g1725.svg" alt="" width={100} height={100} />
          <span>Layover Skateshop</span>
        </Link>
        <SearchField products={products} />

        {user ? (
          <MenuNav key={user.id} user={user} />
        ) : (
          <Link href="/login">Login</Link>
        )}
        <Link href="/cart">
          <MdOutlineShoppingCart size={30} />
          <span className="cart-link-notification">{cartProductsAmount}</span>
        </Link>
      </StyledHeader>
    </>
  );
};
export default Header;
