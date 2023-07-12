import Image from "next/image";
import Link from "next/link";
import { BiSearchAlt } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaUserAstronaut } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { StyledHeader } from "./styles";
import { UserContext } from "../../contexts/user.context";
import { DropDownUserMenu } from "./DropDownMenuUser";
import Navbar from "../Navbar";
import { SearchField } from "./SearchField";

const Header = () => {
  const { user, cart, isLoading, setIsLoading } = useContext(UserContext);

  const [searchFieldValue, setSearchFieldValue] = useState("");
  const [cartProductsNumber, setCartProductsNumber] = useState(
    cart?.products?.length
  );

  const setIsLoadingTrue = () => {
    setIsLoading(true);
  };

  useEffect(() => {
    setCartProductsNumber(cart?.products?.length);
  }, [cart]);

  return (
    <>
      <StyledHeader>
        <Link href="/" className="logo_container" onClick={setIsLoadingTrue}>
          <Image src="/g1725.svg" alt="" width={100} height={100} />
          <span>Layover Skateshop</span>
        </Link>
        <SearchField />
        <section className="header-nav">
          {user && user?.first_name ? (
            <DropDownUserMenu />
          ) : (
            <>
              <Link href="/login" onClick={setIsLoadingTrue}>
                Entrar
              </Link>
              <Link href="/register_user" onClick={setIsLoadingTrue}>
                Cadastrar
              </Link>
            </>
          )}
          <Link href="/cart" onClick={setIsLoadingTrue}>
            <MdOutlineShoppingCart size={30} />
            {cartProductsNumber && (
              <span className="cart-link-notification">
                {cartProductsNumber}
              </span>
            )}
          </Link>
        </section>
      </StyledHeader>
      <Navbar />
    </>
  );
};
export default Header;
