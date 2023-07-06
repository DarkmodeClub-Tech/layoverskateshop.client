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
        <form onSubmit={() => ""}>
          <label htmlFor="search">Pesquise o que deseja</label>
          <input
            placeholder="Pesquise o que deseja"
            onChange={(event) => setSearchFieldValue(event.target.value)}
            type="text"
            name="search"
            id="search"
          />
          <button type="submit">{<BiSearchAlt size={50} />}</button>
        </form>
        <section className="header-nav">
          {user && user?.first_name ? (
            <DropDownUserMenu />
          ) : (
            <Link href="/login" onClick={setIsLoadingTrue}>
              <FaUserAstronaut size={30} />
              Entrar
            </Link>
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
